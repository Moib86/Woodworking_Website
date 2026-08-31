import React from "react";
import { useParams, Link } from "react-router-dom";
import LargeHanger from "../components/LargeHanger";

export default function ProjectDetail() {
  const { slug } = useParams();

  // Simple mapping — extend later to fetch project metadata
  if (slug === "large-hanger") {
    return (
      <div className="section">
        <p><Link to="/gallery">← Back to Gallery</Link></p>
        <h2>Large Coat Hanger</h2>
        <LargeHanger />
      </div>
    );
  }

  return (
    <div className="section">
      <h2>Project not found</h2>
      <p><Link to="/gallery">Back to gallery</Link></p>
    </div>
  );
}
