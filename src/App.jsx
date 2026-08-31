import React from "react";
import Gallery from "./components/Gallery";
import LargeHanger from "./components/LargeHanger";
import Testimonials from "./components/Testimonials";
import About from "./components/About";

export default function App() {
  return (
    <div className="site">
      <header className="site-header">
        <div className="container header-grid">
          <div className="brand-left">
            <a href="/" aria-label="Karl Wood Working home">
              <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="KarlWoodWorking logo" className="brand-logo-small" />
            </a>
          </div>

          <div className="brand-center">
            <div className="brand-copy">
              <h1>Karl Wood Working</h1>
              <p className="tagline">Handcrafted furniture & fixtures</p>
            </div>
          </div>

          <div className="brand-right">
            <a href="#about" className="btn">Contact</a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h2>Beautiful, built-to-last woodwork</h2>
            <p>Custom projects designed and finished with care.</p>
            <p><a href="#gallery" className="btn">View Gallery</a></p>
          </div>
        </div>
      </section>

      <main>
        <section id="gallery" className="section">
          <h2>Gallery</h2>
          <Gallery />
        </section>

        <section id="4 ft Coat Hanger" className="section">
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

      <footer className="site-footer">
        <small>© {new Date().getFullYear()} KarlWoodWorking</small>
      </footer>
    </div>
  );
}