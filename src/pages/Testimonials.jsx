import React from "react";
import { Helmet } from "react-helmet-async";
import Testimonials from "../components/Testimonials";

export default function TestimonialsPage() {
  return (
    <div className="section">
      <Helmet>
        <title>Testimonials — Karl Wood Working</title>
        <meta name="description" content="What customers say about Karl Wood Working" />
        <meta property="og:title" content="Testimonials — Karl Wood Working" />
      </Helmet>

      <h2>Testimonials</h2>
      <p>Read what clients have said about their custom projects.</p>

      <Testimonials />
    </div>
  );
}
