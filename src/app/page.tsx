import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Works from "./_components/Works";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import ScrollEffects from "./_components/ScrollEffects";

export default function Home() {
  return (
    <>
      <div className="fade-in relative font-mono text-stone-200">
        {/* Scroll Effects for Background Image and Back to Top Button */}
        <ScrollEffects />

        {/* Content */}
        <div className="absolute left-0 right-0 top-0">
          <Header />
          <Hero />
        </div>

        <About />
        <Works />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
