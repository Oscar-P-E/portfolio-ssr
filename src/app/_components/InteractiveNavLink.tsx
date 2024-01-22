"use client";

import { type MouseEvent } from "react";

type InteractiveNavLinkProps = {
  targetId: string;
  children: React.ReactNode;
};

const InteractiveNavLink: React.FC<InteractiveNavLinkProps> = ({
  targetId,
  children,
}) => {
  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={`#${targetId}`}
      className="lowercase hover:uppercase"
      onClick={handleLinkClick}
    >
      {children}
    </a>
  );
};

export default InteractiveNavLink;
