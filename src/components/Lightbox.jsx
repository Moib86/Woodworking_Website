import React, { useEffect, useState } from "react";

export default function Lightbox({ images, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => Math.min(images.length - 1, i + 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, onClose]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true">
      <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
      <button className="lightbox-prev" onClick={() => setIndex((i) => Math.max(0, i - 1))} aria-label="Previous">◀</button>
      <div className="lightbox-inner">
        <img src={images[index]} alt={`Image ${index + 1}`} />
      </div>
      <button className="lightbox-next" onClick={() => setIndex((i) => Math.min(images.length - 1, i + 1))} aria-label="Next">▶</button>
    </div>
  );
}