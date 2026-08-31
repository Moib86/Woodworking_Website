import React from "react";
import { Routes, Route, Link } from "react-router-dom";
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
            <Link to="/" aria-label="Karl Wood Working home">
              <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="KarlWoodWorking logo" className="brand-logo-small" />
            </Link>
          </div>

          <div className="brand-center">
            <div className="brand-copy">
              <h1>Karl Wood Working</h1>
              <p className="tagline">Handcrafted furniture & fixtures</p>
            </div>
          </div>

          <div className="brand-right">
            <nav className="site-nav" aria-label="Primary">
              <Link to="/gallery">Gallery</Link>
              <Link to="/projects/large-hanger">Hangers</Link>
              <Link to="/testimonials">Testimonials</Link>
              <Link to="/about" className="btn btn--small">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <section
        className="hero"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0.18)), url(${import.meta.env.BASE_URL}images/logo.png)` }}
      >
        <div className="container hero-inner">
          <div className="hero-copy">
            <h2>Beautiful, built-to-last woodwork</h2>
            <p>Custom projects designed and finished with care.</p>
            <p><Link to="/gallery" className="btn btn--primary">View Gallery</Link></p>
          </div>
        </div>
      </section>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <section id="gallery" className="section">
                <h2>Gallery</h2>
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
          }
        />

        <Route path="/gallery" element={<div className="section"><h2>Gallery</h2><Gallery/></div>} />
        <Route path="/projects/large-hanger" element={<div className="section"><h2>Large Coat Hanger</h2><LargeHanger/></div>} />
        <Route path="/testimonials" element={<div className="section"><h2>Testimonials</h2><Testimonials/></div>} />
        <Route path="/about" element={<div className="section"><h2>About & Contact</h2><About/></div>} />
      </Routes>

      <footer className="site-footer">
        <small>© {new Date().getFullYear()} KarlWoodWorking</small>
      </footer>
    </div>
  );
}