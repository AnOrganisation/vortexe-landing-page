import Image from "next/image";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Calendly from "./calendly";

export const metadata = {
  title: "Sign Up - Vortexe",
  description: "Page description",
};

export default function SignUp() {
  return (
    <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="lg:flex lg:space-x-20">
          {/* Left side */}
          <div className="flex flex-col items-center mb-12 grow lg:mt-20 lg:mb-0 lg:items-start">
            {/* Avatars */}
            <div className="flex -space-x-3 -ml-0.5 mb-6">
              <Image
                className="box-content border-2 rounded-full border-slate-900"
                src={Avatar01}
                width={40}
                height={40}
                alt="Avatar 01"
              />
              <Image
                className="box-content border-2 rounded-full border-slate-900"
                src={Avatar02}
                width={40}
                height={40}
                alt="Avatar 02"
              />
              <Image
                className="box-content border-2 rounded-full border-slate-900"
                src={Avatar03}
                width={40}
                height={40}
                alt="Avatar 03"
              />
              <Image
                className="box-content border-2 rounded-full border-slate-900"
                src={Avatar04}
                width={40}
                height={40}
                alt="Avatar 04"
              />
            </div>
            {/* Headline */}
            <h1 className="mb-8 text-center h2 font-hkgrotesk lg:text-left">
              Get a taste of the user-centric platform
            </h1>
            {/* List */}
            <ul className="inline-flex flex-col space-y-3 text-lg text-slate-500">
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 mr-3 fill-current text-emerald-500 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Utilize the latest AI tools with minimal fuss</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 mr-3 fill-current text-emerald-500 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>No more chatboxes or complicated prompts</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 mr-3 fill-current text-emerald-500 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Save your most frequent tasks as workflows</span>
              </li>
            </ul>
          </div>
          {/* Right side */}
          <div className="relative w-full max-w-md mx-auto">
            {/* Bg gradient */}
            <div
              className="absolute inset-0 opacity-40 bg-gradient-to-t from-transparent to-slate-800 -z-10"
              aria-hidden="true"
            />
            <div className="p-6 md:p-8">
              <div className="mb-6 text-xl font-bold font-hkgrotesk">
                Let's talk
              </div>
              <Calendly />
              {/* Form */}
              {/* <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/divyansh-vortexeai?background_color=0f172a&text_color=dadee2&primary_color=6366f1"
                style={{ minWidth: "320px", height: "700px" }}
              ></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
