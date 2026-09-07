import React from "react";
import { Helmet } from "react-helmet-async";
import Gallery from "../components/Gallery";
import LargeHanger from "../components/LargeHanger";
import Testimonials from "../components/Testimonials";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Karl Wood Working — Handcrafted furniture & fixtures</title>
        <meta name="description" content="Karl Wood Working — custom, handcrafted wood projects. Browse the gallery and contact for commissions." />
        <meta property="og:title" content="Karl Wood Working" />
        <meta property="og:description" content="Custom woodworking projects — gallery of finished pieces." />
        <meta property="og:image" content={`${import.meta.env.BASE_URL}images/2ftdecor.png`} />
      </Helmet>
      <main>
        <section id="gallery" className="section">
          <h2>Gallery</h2>
          <p>Browse recent finished projects below. Click any image to view larger.</p>
          <Gallery />
        </section>

        <section id="Hangers" className="section">
          <h2>Large Coat Hanger</h2>
          <LargeHanger />
        </section>

        <section id="testimonials" className="section">
          <h2>Testimonials</h2>
          <Testimonials />
        </section>

        <section id="about" className="section">
          <h2>About & Contact</h2>
          <About />
        </section>
      </main>
    </>
  );
}
