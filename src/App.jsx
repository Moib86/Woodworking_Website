import React, { Suspense } from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const GalleryPage = React.lazy(() => import("./pages/GalleryPage"));
const ProjectDetail = React.lazy(() => import("./pages/ProjectDetail"));
const TestimonialsPage = React.lazy(() => import("./pages/TestimonialsPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));

export default function App() {
  return (
    <div className="site">
      <header className="site-header">
        <div className="container header-grid">

          <div className="brand-center">
            <div className="brand-copy">
              <h1>Karl Wood Working</h1>
              <p className="tagline">Handcrafted furniture & fixtures</p>
            </div>
          </div>

          <div className="brand-right">
            <nav className="site-nav" aria-label="Primary">
              <NavLink to="/gallery" className={({isActive}) => isActive ? 'site-nav-link active' : 'site-nav-link'}>Gallery</NavLink>
              <NavLink to="/projects/large-hanger" className={({isActive}) => isActive ? 'site-nav-link active' : 'site-nav-link'}>Hangers</NavLink>
              <NavLink to="/testimonials" className={({isActive}) => isActive ? 'site-nav-link active' : 'site-nav-link'}>Testimonials</NavLink>
              <NavLink to="/about" className={({isActive}) => 'btn btn--small' + (isActive ? ' active' : '')}>Contact</NavLink>
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
            {/* <p><Link to="/gallery" className="btn btn--primary">View Gallery</Link></p> */}
          </div>
        </div>
      </section>
      <Suspense fallback={<div className="section">Loading…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>

      <footer className="site-footer">
        <small>© {new Date().getFullYear()} KarlWoodWorking</small>
      </footer>
    </div>
  );
}