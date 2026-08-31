import React, { Suspense } from "react";

const Gallery = React.lazy(() => import("../components/Gallery"));

export default function GalleryPage() {
  return (
    <Suspense fallback={<div className="section">Loading gallery…</div>}>
      <div className="section">
        <h2>Gallery</h2>
        <Gallery />
      </div>
    </Suspense>
  );
}
