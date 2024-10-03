import Image from "next/image";
import ChatGPT from "@/public/images/ChatGpt.svg";
import HuggingFace from "@/public/images/HuggingFace.svg";
import Kaggle from "@/public/images/Kaggle.svg";
import Midjourney from "@/public/images/Midjourney.svg";
import CoPilot from "@/public/images/CoPilot.svg";
import Bing from "@/public/images/Bing.svg";
import VortexLogo from "@/public/images/VortexeLogo.svg";
export default function Integrations() {
  return (
    <section className="relative">
      {/* Bottom vertical line */}
      <div
        className="hidden md:block absolute w-0.5 h-8 bottom-0 bg-slate-800 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      />
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 border-t md:py-20 border-slate-800">
          {/* Section header */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12 md:pb-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-hkgrotesk font-bold leading-tight">
              Utilizing AI tools all in one place.
            </h2>
          </div>
          {/* Logo animation */}
          <div className="relative flex flex-col items-center p-16">
            {/* Blurred dots */}
            <svg
              className="absolute -translate-y-1/2 top-1/2"
              width="557"
              height="93"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                  filterUnits="objectBoundingBox"
                  id="hlogo-blurreddots-a"
                >
                  <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
                </filter>
                <filter
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                  filterUnits="objectBoundingBox"
                  id="blurreddots-b"
                >
                  <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
                </filter>
                <filter
                  x="-150%"
                  y="-150%"
                  width="400%"
                  height="400%"
                  filterUnits="objectBoundingBox"
                  id="blurreddots-c"
                >
                  <feGaussianBlur stdDeviation="6" in="SourceGraphic" />
                </filter>
                <filter
                  x="-150%"
                  y="-150%"
                  width="400%"
                  height="400%"
                  filterUnits="objectBoundingBox"
                  id="blurreddots-d"
                >
                  <feGaussianBlur stdDeviation="4" in="SourceGraphic" />
                </filter>
                <filter
                  x="-150%"
                  y="-150%"
                  width="400%"
                  height="400%"
                  filterUnits="objectBoundingBox"
                  id="blurreddots-e"
                >
                  <feGaussianBlur stdDeviation="4" in="SourceGraphic" />
                </filter>
                <filter
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                  filterUnits="objectBoundingBox"
                  id="blurreddots-f"
                >
                  <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
                </filter>
                <filter
                  x="-100%"
                  y="-100%"
                  width="300%"
                  height="300%"
                  filterUnits="objectBoundingBox"
                  id="blurreddots-g"
                >
                  <feGaussianBlur stdDeviation="4" in="SourceGraphic" />
                </filter>
                <filter
                  x="-150%"
                  y="-150%"
                  width="400%"
                  height="400%"
                  filterUnits="objectBoundingBox"
                  id="blurreddots-h"
                >
                  <feGaussianBlur stdDeviation="6" in="SourceGraphic" />
                </filter>
                <filter
                  x="-150%"
                  y="-150%"
                  width="400%"
                  height="400%"
                  filterUnits="objectBoundingBox"
                  id="blurreddots-i"
                >
                  <feGaussianBlur stdDeviation="4" in="SourceGraphic" />
                </filter>
                <filter
                  x="-75%"
                  y="-75%"
                  width="250%"
                  height="250%"
                  filterUnits="objectBoundingBox"
                  id="blurreddots-j"
                >
                  <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
                </filter>
              </defs>
              <g fill="none" fillRule="evenodd">
                <g className="fill-indigo-600" transform="translate(437 8)">
                  <circle
                    fillOpacity=".64"
                    filter="url(#blurreddots-a)"
                    cx="6"
                    cy="66"
                    r="6"
                  />
                  <circle
                    fillOpacity=".32"
                    filter="url(#blurreddots-b)"
                    cx="90"
                    cy="6"
                    r="6"
                  />
                  <circle
                    fillOpacity=".64"
                    filter="url(#blurreddots-c)"
                    cx="90"
                    cy="66"
                    r="6"
                  />
                  <circle
                    fillOpacity=".32"
                    filter="url(#blurreddots-d)"
                    cx="6"
                    cy="36"
                    r="4"
                  />
                  <circle
                    fillOpacity=".32"
                    filter="url(#blurreddots-e)"
                    cx="60"
                    cy="36"
                    r="4"
                  />
                  <circle fillOpacity=".64" cx="34" cy="22" r="2" />
                  <circle fillOpacity=".32" cx="34" cy="50" r="2" />
                  <circle fillOpacity=".64" cx="118" cy="22" r="2" />
                  <circle fillOpacity=".32" cx="118" cy="50" r="2" />
                </g>
                <g
                  className="fill-indigo-600"
                  transform="matrix(-1 0 0 1 120 8)"
                >
                  <circle
                    fillOpacity=".64"
                    filter="url(#blurreddots-f)"
                    cx="6"
                    cy="66"
                    r="6"
                  />
                  <circle
                    fillOpacity=".32"
                    filter="url(#blurreddots-g)"
                    cx="90"
                    cy="6"
                    r="6"
                  />
                  <circle
                    fillOpacity=".64"
                    filter="url(#blurreddots-h)"
                    cx="90"
                    cy="66"
                    r="6"
                  />
                  <circle
                    fillOpacity=".32"
                    filter="url(#blurreddots-i)"
                    cx="6"
                    cy="36"
                    r="4"
                  />
                  <circle
                    fillOpacity=".64"
                    filter="url(#blurreddots-j)"
                    cx="60"
                    cy="36"
                    r="4"
                  />
                  <circle fillOpacity=".32" cx="34" cy="22" r="2" />
                  <circle fillOpacity=".32" cx="34" cy="50" r="2" />
                  <circle fillOpacity=".64" cx="118" cy="22" r="2" />
                  <circle fillOpacity=".32" cx="118" cy="50" r="2" />
                </g>
              </g>
            </svg>
            <div className="relative flex items-center justify-center w-32 h-32">
              {/* Halo effect */}
              <svg
                className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none h-auto max-w-[200%]"
                width="800"
                height="800"
                viewBox="0 0 800 800"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lg-1">
                    <stop stopColor="#0f0f0f" stopOpacity="0%" offset="0%" />
                    <stop stopColor="#0f0f0f" offset="100%" />
                  </linearGradient>
                </defs>
                <g className="opacity-75 fill-indigo-600" fillRule="evenodd">
                  <circle className="pulse" cx="400" cy="400" r="200" />
                  <circle className="pulse pulse-1" cx="400" cy="400" r="200" />
                  <circle className="pulse pulse-2" cx="400" cy="400" r="200" />
                  <circle className="pulse pulse-3" cx="400" cy="400" r="200" />
                  <rect fill="url(#lg-1)" width="800" height="800" />
                </g>
              </svg>
              {/* Logo */}
              <Image
                src={VortexLogo}
                alt="vortexe ai logo"
                width={86}
                height={76}
              />
            </div>
          </div>
          {/* Integration boxes */}
          <div className="relative grid max-w-xs grid-cols-2 gap-6 mx-auto mt-10 sm:max-w-md md:max-w-6xl sm:grid-cols-3 md:grid-cols-6 md:mt-20">
            {/* Top vertical line */}
            <div
              className="hidden md:block absolute w-0.5 h-8 -top-16 -mt-2 bg-slate-800 left-1/2 -translate-x-1/2"
              aria-hidden="true"
            />
            <div
              className="relative flex items-center justify-center p-2 bg-opacity-0 border rounded-md aspect-square border-slate-800"
              data-aos="fade-up"
            >
              {/* Inner lines */}
              <div
                className="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2"
                aria-hidden="true"
              >
                <div className="absolute w-0.5 h-full bg-slate-800 left-1/2 -translate-x-1/2" />
                <div className="absolute w-1/2 h-0.5 bg-slate-800 right-0" />
              </div>
              {/* Circle */}
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-t from-slate-800 to-slate-900">
                {/* Icon */}
                <Image src={ChatGPT} width={46} height={56} alt="Icon 01" />
              </div>
            </div>
            <div
              className="relative flex items-center justify-center p-2 bg-opacity-0 border rounded-md aspect-square border-slate-800"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {/* Inner lines */}
              <div
                className="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2"
                aria-hidden="true"
              >
                <div className="absolute w-0.5 h-full bg-slate-800 left-1/2 -translate-x-1/2" />
                <div className="absolute w-full h-0.5 bg-slate-800" />
              </div>
              {/* Circle */}
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-t from-slate-800 to-slate-900">
                {/* Icon */}
                <Image src={CoPilot} width={46} height={46} alt="Icon 02" />
              </div>
            </div>
            <div
              className="relative flex items-center justify-center p-2 bg-opacity-0 border rounded-md aspect-square border-slate-800"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Inner lines */}
              <div
                className="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2"
                aria-hidden="true"
              >
                <div className="absolute w-0.5 h-full bg-slate-800 left-1/2 -translate-x-1/2" />
                <div className="absolute w-full h-0.5 bg-slate-800" />
              </div>
              {/* Circle */}
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-t from-slate-800 to-slate-900">
                {/* Icon */}
                <Image src={Midjourney} width={43} height={35} alt="Icon 03" />
              </div>
            </div>
            <div
              className="relative flex items-center justify-center p-2 bg-opacity-0 border rounded-md aspect-square border-slate-800"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {/* Inner lines */}
              <div
                className="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2"
                aria-hidden="true"
              >
                <div className="absolute w-0.5 h-full bg-slate-800 left-1/2 -translate-x-1/2" />
                <div className="absolute w-full h-0.5 bg-slate-800" />
              </div>
              {/* Circle */}
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-t from-slate-800 to-slate-900">
                {/* Icon */}
                <Image src={HuggingFace} width={48} height={46} alt="Icon 04" />
              </div>
            </div>
            <div
              className="relative flex items-center justify-center p-2 bg-opacity-0 border rounded-md aspect-square border-slate-800"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {/* Inner lines */}
              <div
                className="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2"
                aria-hidden="true"
              >
                <div className="absolute w-0.5 h-full bg-slate-800 left-1/2 -translate-x-1/2" />
                <div className="absolute w-full h-0.5 bg-slate-800" />
              </div>
              {/* Circle */}
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-t from-slate-800 to-slate-900">
                {/* Icon */}
                <Image src={Kaggle} width={29} height={28} alt="Icon 05" />
              </div>
            </div>
            <div
              className="relative flex items-center justify-center p-2 bg-opacity-0 border rounded-md aspect-square border-slate-800"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {/* Inner lines */}
              <div
                className="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2"
                aria-hidden="true"
              >
                <div className="absolute w-0.5 h-full bg-slate-800 left-1/2 -translate-x-1/2" />
                <div className="absolute w-1/2 h-0.5 bg-slate-800 left-0" />
              </div>
              {/* Circle */}
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-t from-slate-800 to-slate-900">
                {/* Icon */}
                <Image src={Bing} width={28} height={24} alt="Icon 06" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
