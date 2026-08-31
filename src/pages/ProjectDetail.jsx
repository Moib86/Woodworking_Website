import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Lightbox from "../components/Lightbox";
import projects from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  if (!project) {
    return (
      <div className="section">
        <h2>Project not found</h2>
        <p><Link to="/gallery">Back to gallery</Link></p>
      </div>
    );
  }

  const imageUrls = project.images.map((f) => `${import.meta.env.BASE_URL}images/${f}`);

  return (
    <div className="section">
      <p><Link to="/gallery">← Back to Gallery</Link></p>
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <div className="gallery-grid">
        {project.images.map((filename, idx) => (
          <button
            key={filename}
            className="gallery-item"
            onClick={() => setLightboxIndex(idx)}
            aria-label={`Open ${filename}`}
          >
            <img src={`${import.meta.env.BASE_URL}images/${filename}`} alt={filename} loading="lazy" />
          </button>
        ))}
      </div>

      {lightboxIndex >= 0 && (
        <Lightbox
          images={imageUrls}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(-1)}
        />
      )}
    </div>
  );
}
