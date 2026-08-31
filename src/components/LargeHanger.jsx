import React, { useEffect, useState } from "react";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}largehanger.json`)
      .then((r) => r.json())
      .then((data) => setImages(data || []))
      .catch(() => setImages([]));
  }, []);

  if (images.length === 0) {
    return <p>No images yet. Add photos to <code>public/images/</code> and list them in <code>public/largehanger.json</code>.</p>;
  }

  // Show only the first image as a large preview; open Lightbox (all images)
  // when the preview is clicked.
  return (
    <>
      <div
        className="large-preview"
        role="button"
        tabIndex={0}
        onClick={() => setLightboxIndex(0)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setLightboxIndex(0); }}
        aria-label={`Open ${images[0]}`}
      >
        <img
          src={`${import.meta.env.BASE_URL}images/${images[0]}`}
          alt={images[0]}
          loading="lazy"
        />
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