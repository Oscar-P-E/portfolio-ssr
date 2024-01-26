"use client";

import Marquee from "react-fast-marquee";

export default function HeaderMarquee() {
  const marqueeText =
    "Hello, World! Hypnotic text. My name is Oscar El. I make websites.  I make web apps.  I make professional business products.  I make creative designs for you. I make your business look good. I make your business look better. I make your business look the best. I make your business look the bestest. I make your website look good on mobile. I make your website look good on mobile and desktop. I make your website look good on mobile, desktop, and tablet. I make your website look good on mobile, desktop, tablet, and smartwatch. I make your website look good on mobile, desktop, tablet, smartwatch, and smart fridge. I make your website look good on mobile, desktop, tablet, smartwatch, smart fridge, and smart car. I make your website look good on mobile, desktop, tablet, smartwatch, smart fridge, smart car, and smart house.";

  return (
    <Marquee
      gradient={false}
      speed={50}
      className="flex cursor-default whitespace-nowrap text-3xl uppercase mr-2"
    >
      {marqueeText.repeat(1)}
    </Marquee>
  );
}
