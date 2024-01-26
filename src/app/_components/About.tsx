import { FaReact, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiTrpc,
} from "react-icons/si";

export default function About() {
  return (
    <>
      <div className="flex flex-col pt-48 text-center">
        <div className="fade-out border-b-2 border-t-2 border-stone-200 border-opacity-50 bg-gradient-to-tr from-cyan-950 to-indigo-950 px-8 py-12 sm:px-12 sm:py-12">
          <div className="flex justify-center">
            <div className="max-w-5xl">
              <h2 className=" pb-8 text-6xl">Weapons of Choice:</h2>
              <ul className="grid grid-cols-2 gap-x-[8vw] gap-y-4 text-2xl sm:grid-cols-2 md:grid-cols-3">
                <li className="hover-grow flex items-center justify-start gap-2">
                  <FaReact /> React
                </li>
                <li className="hover-grow flex items-center justify-start gap-2">
                  <SiTypescript /> TypeScript
                </li>
                <li className="hover-grow flex items-center justify-start gap-2">
                  <SiJavascript /> JavaScript
                </li>
                <li className="hover-grow flex items-center justify-start gap-2">
                  <SiNextdotjs /> Next.js
                </li>
                <li className="hover-grow flex items-center justify-start gap-2">
                  <SiTailwindcss /> Tailwind{" "}
                  <span className="hidden sm:flex">CSS</span>
                </li>
                <li className="hover-grow flex items-center justify-start gap-2">
                  <FaGitAlt /> Git
                </li>
                <li className="hover-grow flex items-center justify-start gap-2">
                  <SiPrisma /> Prisma
                </li>
                <li className="hover-grow flex items-center justify-start gap-2">
                  <SiTrpc /> tRPC
                </li>
                <li className="hover-grow hidden items-center justify-start gap-2 md:flex">
                  <FaHtml5 /> HTML + <FaCss3Alt /> CSS
                </li>
                <li className="hover-grow flex items-center justify-start gap-2 md:hidden">
                  <FaHtml5 /> HTML
                </li>
                <li className="hover-grow flex items-center justify-start gap-2 md:hidden">
                  <FaCss3Alt /> CSS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
