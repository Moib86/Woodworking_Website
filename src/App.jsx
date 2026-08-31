import React from "react";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import About from "./components/About";

export default function App() {
  return (
    <div className="site">
      <header className="site-header">
        <div className="brand-wrap">
          <div className="brand-mark" aria-label="KarlWoodWorking logo">
            <img src="/images/logo.png" alt="KarlWoodWorking logo" className="brand-logo" />
          </div>
          <div className="brand-copy">
            <h1>Karl Wood Working</h1>
          </div>
        </div>
      </header>

      <main>
        <section id="gallery" className="section">
          <h2>Gallery</h2>
          <Gallery />
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