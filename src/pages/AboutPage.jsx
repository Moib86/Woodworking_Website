import React from "react";
import { Helmet } from "react-helmet-async";
import About from "../components/About";

export default function AboutPage() {
  return (
    <div className="section">
      <Helmet>
        <title>About — Karl Wood Working</title>
        <meta name="description" content="About Karl Wood Working: process, materials, and contact information." />
      </Helmet>
      <h2>About & Contact</h2>
      <About />
    </div>
  );
}
