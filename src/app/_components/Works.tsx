export default function Works() {
  return (
    <div className="pb-24 pt-4">
      <div className="px-8 pt-12 md:px-24 md:pt-40">
        <h1 id="works" className="sticky top-0 pt-8 text-5xl md:text-6xl">
          Portfolio<span className="blinking-cursor">_</span>
        </h1>

        {/* Project 1 */}
        <div className="flex flex-col-reverse gap-12 pt-52 lg:grid lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="pb-12 md:pb-24">
              <img
                className="fade-in-from-left rounded-[2rem]"
                src="/img/works/oe-multiple.jpg"
                alt="optimize electrical responsive design multiple devices"
              />
            </div>
            <div className="pb-12 md:pb-24">
              <img
                className="fade-in-from-left rounded-[2rem]"
                src="/img/works/oe-phone.jpg"
                alt="optimize electrical mobile phone"
              />
            </div>
          </div>

          <div className="fade-in-from-left h-fit">
            <h2 className="text-4xl hover:opacity-80">
              <a href="https://optimizeelectrical.com.au">
                Optimize Electrical
              </a>
            </h2>
            <p className="py-2 text-2xl">
              Not overly fancy, yet professional and modern. User-friendly
              design, intuitive interface. Easy to see who they are are, what
              they do, and how to{" "}
              <span className="whitespace-nowrap">contact them</span>.
            </p>
            <p className="text-2xl">
              {"> "}
              <a
                className="underline decoration-dotted hover:opacity-80"
                href="https://optimizeelectrical.com.au"
              >
                optimizeelectrical.com.au
              </a>
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col gap-12 pt-52 lg:grid lg:grid-cols-3">
          <div className="fade-in-from-left h-fit">
            <h2 className="text-4xl hover:opacity-80">
              <a href="https://glassninja.com.au">Glass Ninja</a>
            </h2>
            <p className="py-2 text-2xl">
              A non-standard design almost entirely in pure black and white.
              Everything fits on a single page, resembling a window with panes
              that expand into full screen pages. Compact but still intuitive.
              Calls to action are never buried. A &quot;clean&quot; design for a
              window{" "}
              <span className="whitespace-nowrap">cleaning business.</span>
            </p>
            <p className="text-2xl">
              {"> "}
              <a
                className="underline decoration-dotted hover:opacity-80"
                href="https://glassninja.com.au"
              >
                glassninja.com.au
              </a>
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="pb-12 md:pb-24">
              {/* <div className="pl-12 pr-11 pt-12 pb-11 bg-gradient-to-tr opacity-90 from-[rgb(240,243,254)] to-[rgb(210,210,225)] rounded-[2rem]"> */}
              <img
                className="fade-in-from-left rounded-[2rem]"
                src="/img/works/gn-browser-3.jpg"
                alt="optimize electrical responsive design multiple devices"
              />
              {/* </div> */}
            </div>
            <div className="pb-12 md:pb-24">
              <img
                className="fade-in-from-left rounded-[2rem]"
                src="/img/works/gn-phone-2.jpg"
                alt="optimize electrical mobile phone"
              />
            </div>
            <div className="pb-12 md:pb-24">
              <img
                className="fade-in-from-left rounded-[2rem]"
                src="/img/works/gn-phone-contact-2.jpg"
                alt="optimize electrical mobile phone"
              />
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col-reverse gap-12 pt-52 lg:grid lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="pb-12 md:pb-24">
              <img
                className="fade-in-from-left rounded-[2rem]"
                src="/img/works/nlbc-welcome.jpg"
                alt="new life baptist church browser mockup contact page"
              />
            </div>

            <div className="pb-12 md:pb-24">
              <img
                className="fade-in-from-left rounded-[2rem]"
                src="/img/works/nlbc-laptop.jpg"
                alt="new life baptist church laptop mockup"
              />
            </div>

            <div className="pb-12 md:pb-24">
              <img
                className="fade-in-from-left rounded-[2rem]"
                src="/img/works/nlbc-phone.jpg"
                alt="new life baptist church phone mockup responsive design"
              />
            </div>
          </div>

          <div className="fade-in-from-left h-fit">
            <h2 className="text-4xl hover:opacity-80">
              <a href="https://nlbc-website.vercel.app">
                New Life Baptist Church
              </a>
            </h2>
            <p className="py-2 text-2xl">
              A modern and clean design with a traditional feel. The two main
              target audiences are people looking for a new church, and people
              looking for their latest videos online. Key information is
              displayed clearly and concisely in the About and Contact sections,
              and the Sermons page features the latest videos from their YouTube
              channel (automatically kept up to date).
            </p>
            <p className="text-2xl">
              {"> "}
              <a
                className="underline decoration-dotted hover:opacity-80"
                href="https://nlbc-website.vercel.app"
              >
                nlbc-website.vercel.app
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
