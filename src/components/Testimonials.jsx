import React, { useEffect, useState } from "react";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}testimonials.json`)
      .then((r) => r.json())
      .then((data) => setTestimonials(data || []))
      .catch(() => setTestimonials([]));
  }, []);

  if (testimonials.length === 0) {
    return <p>No testimonials yet. Edit <code>public/testimonials.json</code> to add them.</p>;
  }

  return (
    <div className="testimonials">
      {testimonials.map((t, i) => (
        <blockquote className="testimonial" key={i}>
          <p className="quote">“{t.quote}”</p>
          <footer className="cite">— {t.name}{t.city ? `, ${t.city}` : ""}</footer>
        </blockquote>
      ))}
    </div>
  );
}