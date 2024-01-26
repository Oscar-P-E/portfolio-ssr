import HeaderMarquee from "./HeaderMarquee";
import InteractiveNavLink from "./InteractiveNavLink";

export default function Header() {
  return (
    <header className="sticky left-0 right-0 top-0 z-10 h-14 bg-neutral-900 bg-opacity-30 backdrop-blur-sm">
      <nav className="mx-auto flex h-full  items-center justify-between border-stone-200 px-2 md:border-b">
        <span className="hidden overflow-hidden md:flex">
          <HeaderMarquee />
        </span>
        <ul className="flex grow justify-center gap-12 border border-stone-200 py-1 text-2xl uppercase md:ml-auto md:px-12">
          <li>
            <InteractiveNavLink targetId="works">Works</InteractiveNavLink>
          </li>
          <li>
            <InteractiveNavLink targetId="contact">Contact</InteractiveNavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
