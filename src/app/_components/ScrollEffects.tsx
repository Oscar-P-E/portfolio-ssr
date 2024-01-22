"use client";

import { useState, useEffect } from "react";
import BackToTop from "./BackToTop";

const ScrollEffects = () => {
  const [bgImageOpacity, setBgImageOpacity] = useState(1);
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const worksElement = document.getElementById("works");
    if (!worksElement) return;

    // Adjust bg image opacity
    const scrollPosition = window.scrollY + window.innerHeight;
    const worksPosition = worksElement.offsetTop;
    const opacity = Math.max(
      1 - (scrollPosition - worksPosition) / window.innerHeight,
      0,
    );
    setBgImageOpacity(opacity);

    // Show/hide 'Back to Top' button
    const totalHeight = document.body.scrollHeight;
    setShowButton(scrollPosition > totalHeight * 0.5);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Background Image */}
      <div
        className="h-hero-minus-header bg-hero"
        style={{
          opacity: bgImageOpacity,
        }}
      />

      {/* Back to Top Button */}
      {showButton && <BackToTop />}
    </>
  );
};

export default ScrollEffects;
