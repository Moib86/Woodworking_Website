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
      <section
        className="hero"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0.18)), url(${import.meta.env.BASE_URL}images/2ftdecor.png)` }}
      >
        <div className="container hero-inner">
          <div className="hero-copy">
            <h2>Beautiful, built-to-last woodwork</h2>
            <p>Custom projects designed and finished with care.</p>
            <p><a href="/gallery" className="btn btn--primary">View Gallery</a></p>
          </div>
        </div>
      </section>

      <main>
        <section id="gallery" className="section">
          <h2>Gallery</h2>
          <p>Here is a selection of recent finished projects to give you a sense of style and scale. Click any image to view larger or visit the full gallery for more.</p>
          <Gallery limit={8} />
          <p style={{marginTop: '1rem'}}><a href="/gallery" className="btn">View full gallery</a></p>
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
