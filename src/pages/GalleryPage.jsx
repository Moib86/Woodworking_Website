import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";

const Gallery = React.lazy(() => import("../components/Gallery"));

export default function GalleryPage() {
  return (
    <Suspense fallback={<div className="section">Loading gallery…</div>}>
      <Helmet>
        <title>Gallery — Karl Wood Working</title>
        <meta name="description" content="Browse Karl Wood Working's gallery of finished woodworking projects." />
        <meta property="og:title" content="Karl Wood Working — Gallery" />
      </Helmet>
      <div className="section">
        <h2>Gallery</h2>
        <Gallery />
      </div>
    </Suspense>
  );
}
