"use client";

import { useEffect } from "react";

const HeroClientSideLogic = () => {
  const adjustFontSize = () => {
    const vhSize = window.innerHeight * 0.2;
    const vwSize = window.innerWidth * 0.15;
    const fontSize = Math.min(vhSize, vwSize);

    const smallVhSize = window.innerHeight * 0.4;
    const smallVwSize = window.innerWidth * 0.2;
    const smallFontSize = Math.min(smallVhSize, smallVwSize);

    const heading = document.querySelector(".hero-heading");
    if (heading instanceof HTMLElement) {
      heading.style.fontSize = `${window.innerWidth >= 640 ? fontSize : smallFontSize}px`;
    }
  };

  const handleButtonClick = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Adjust font size
    window.addEventListener("resize", adjustFontSize);
    adjustFontSize(); // Adjust on initial render

    // Add click event listener to the button
    const button = document.getElementById("messageMeButton");
    if (button) {
      button.addEventListener("click", handleButtonClick);
    }

    return () => {
      window.removeEventListener("resize", adjustFontSize);
      if (button) {
        button.removeEventListener("click", handleButtonClick);
      }
    };
  }, []);

  return null; // This component does not render anything visually
};

export default HeroClientSideLogic;
