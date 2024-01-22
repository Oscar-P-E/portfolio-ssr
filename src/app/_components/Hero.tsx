import HeroClientSideLogic from "./HeroClientSideLogic";

export default function Hero() {
  return (
    <div className="fade-out h-hero-minus-header flex flex-col sm:flex-col-reverse">
      <div className="flex flex-col justify-end p-6 pr-0">
        <h1 className="hero-heading  uppercase leading-[80%] tracking-tight">
          Front-End
          <br />
          Developer
        </h1>
      </div>
      <div className=" mb-auto ml-auto max-w-4xl pr-12 pt-12 text-end  text-4xl sm:text-5xl md:text-6xl">
        <p className="pb-2">
          My name is <span className="whitespace-nowrap">Oscar El.</span>
        </p>
        <p>
          I build business websites and{" "}
          <span className="whitespace-nowrap">web applications.</span>
        </p>
        <div className="pt-12 text-3xl">
          <button
            id="messageMeButton"
            className="linear rotate-2 scale-100 transform rounded-2xl border-2 border-stone-200 border-opacity-50 bg-cyan-300 bg-gradient-to-bl from-indigo-400 to-cyan-400 px-5 pb-1.5 pt-2 uppercase tracking-widest text-white text-opacity-80 ring-2 ring-inset  ring-opacity-50  -hue-rotate-90 transition-all delay-0 duration-1000  hover:rotate-1 hover:scale-110 hover:border-fuchsia-100 hover:border-opacity-100 hover:text-white hover:text-opacity-80 hover:shadow-none hover:ring-0  hover:hue-rotate-0 hover:delay-0 hover:duration-300"
          >
            Message Me
          </button>
        </div>
      </div>
      <HeroClientSideLogic />
    </div>
  );
}
