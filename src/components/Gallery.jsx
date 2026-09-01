import React, { useEffect, useState } from "react";
import Lightbox from "./Lightbox";

export default function Gallery({ limit } = {}) {
  const [images, setImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}images.json`)
      .then((r) => r.json())
      .then((data) => setImages(data || []))
      .catch(() => setImages([]));
  }, []);

  if (images.length === 0) {
    return <p>No images yet. Add photos to <code>public/images/</code> and list them in <code>public/images.json</code>.</p>;
  }

  const displayImages = typeof limit === 'number' ? images.slice(0, limit) : images;

  return (
    <>
      <div className="gallery-grid">
        {displayImages.map((filename, idx) => {
          const realIndex = images.indexOf(filename);
          return (
            <button
              key={filename}
              className="gallery-item"
              onClick={() => setLightboxIndex(realIndex)}
              aria-label={`Open ${filename}`}
            >
              <img src={`${import.meta.env.BASE_URL}images/${filename}`} alt={filename} loading="lazy" />
            </button>
          );
        })}
      </div>

      {lightboxIndex >= 0 && (
        <Lightbox
          images={images.map((f) => `${import.meta.env.BASE_URL}images/${f}`)}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(-1)}
        />
      )}
    </>
  );
}