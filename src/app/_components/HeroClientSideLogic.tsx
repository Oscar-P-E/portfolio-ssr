"use client";

import { useState, useEffect, useCallback } from "react";

const HeroClientSideLogic = () => {
  const [vhSize, setVhSize] = useState(window.innerHeight * 0.2);
  const [vwSize, setVwSize] = useState(window.innerWidth * 0.15);
  const [smallVhSize, setSmallVhSize] = useState(window.innerHeight * 0.2);
  const [smallVwSize, setSmallVwSize] = useState(window.innerWidth * 0.2);

  const adjustFontSize = useCallback(() => {
    setVhSize(window.innerHeight * 0.2);
    setVwSize(window.innerWidth * 0.15);
    setSmallVhSize(window.innerHeight * 0.2);
    setSmallVwSize(window.innerWidth * 0.2);

    const calculatedFontSize =
      window.innerWidth >= 640
        ? Math.min(vhSize, vwSize)
        : Math.min(smallVhSize, smallVwSize);

    const heading = document.querySelector(".hero-heading");
    if (heading instanceof HTMLElement) {
      heading.style.fontSize = `${calculatedFontSize}px`;
    }
  }, [vhSize, vwSize, smallVhSize, smallVwSize]);

  useEffect(() => {
    window.addEventListener("resize", adjustFontSize);
    adjustFontSize(); // Adjust on initial render

    return () => {
      window.removeEventListener("resize", adjustFontSize);
    };
  }, [adjustFontSize]);

  const handleButtonClick = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const button = document.getElementById("messageMeButton");
    if (button) {
      button.addEventListener("click", handleButtonClick);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", handleButtonClick);
      }
    };
  }, []);

  return null;
};

export default HeroClientSideLogic;
