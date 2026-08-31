import React, { useEffect, useState } from "react";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  useEffect(() => {
    fetch("/images.json")
      .then((r) => r.json())
      .then((data) => setImages(data || []))
      .catch(() => setImages([]));
  }, []);

  if (images.length === 0) {
    return <p>No images yet. Add photos to <code>public/images/</code> and list them in <code>public/images.json</code>.</p>;
  }

  return (
    <>
      <div className="gallery-grid">
        {images.map((filename, idx) => (
          <button
            key={filename}
            className="gallery-item"
            onClick={() => setLightboxIndex(idx)}
            aria-label={`Open ${filename}`}
          >
            <img src={`/images/${filename}`} alt={filename} loading="lazy" />
          </button>
        ))}
      </div>

      {lightboxIndex >= 0 && (
        <Lightbox
          images={images.map((f) => `/images/${f}`)}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(-1)}
        />
      )}
    </>
  );
}