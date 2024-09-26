"use client";

import { useState } from "react";
import Image from "next/image";
import Illustration from "@/public/images/features-illustration-02.svg";
import FeaturesImage from "@/public/images/ActionsBar.png";

export default function Features02() {
  const [category, setCategory] = useState<string>("1");

  return (
    <section className="relative border-t border-slate-800">
      {/* Bg gradient: top */}
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-800 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div
        className="absolute top-0 hidden mt-40 -translate-x-1/2 pointer-events-none lg:block left-1/2 -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          width="1440"
          height="453"
          alt="Features 02 Illustration"
        />
      </div>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20"></div>
          {/* Box */}
          <div className="overflow-hidden rounded-2xl bg-[#ffffff] bg-opacity-10 border-white border-2 border-opacity-20">
            <div className="flex flex-col items-end md:flex-row md:items-start md:justify-between lg:space-x-20">
              <div className="md:min-w-[28rem] p-6 lg:p-10">
                {/* Content */}
                <div>
                  <h1
                    className="mb-6 md:text-4xl font-hkgrotesk text-7xl"
                    data-aos="fade-up"
                  >
                  <span className="text-white">Multi-Modal Workflows</span>
                  </h1>
                  <div className="mt-3 ml-1 text-2xl text-slate-300">
                    Create custom actions powered by different AI models and organize them into 
                    a single automated workflow that can be connected to anything.
                  </div>
                </div>
              </div>
              <Image
                src={FeaturesImage}
                className="mx-auto md:max-w-none"
                width="200"
                height="100"
                alt="Feature"
              />
            </div>
          </div>
          {/* Box 2 */}
          <div className="flex md:justify-between">
            <div className="mt-4 overflow-auto rounded-2xl bg-[#ffffff] bg-opacity-10 border-white border-2 border-opacity-20">
              <div className="flex flex-col items-start md:flex-row md:items-start md:justify-start lg:space-x-20">
                <div className="p-6 lg:p-10">
                  {/* Content */}
                  <div>
                    <h1
                      className="mb-6 md:text-2xl font-hkgrotesk"
                      data-aos="fade-up"
                    >
                    <span className="text-white">Seamless Integrations</span>
                    </h1>
                    <div className="max-w-sm mt-3 text-[18px] text-slate-300">
                    Effortlessly link with any platform, whether through direct API connections or through our out of the box integrations in Vortexe, 
                    enabling you to import data for workflows or export results seamlessly.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 overflow-auto rounded-2xl bg-[#ffffff] bg-opacity-10 border-white border-2 border-opacity-20">
              <div className="flex flex-col items-start md:flex-row md:items-start md:justify-start lg:space-x-20">
                <div className="p-6 lg:p-10">
                  {/* Content */}
                  <div>
                    <h1
                      className="mb-6 md:text-2xl font-hkgrotesk"
                      data-aos="fade-up"
                    >
                    <span className="text-white">Chat with Vortexe</span>
                    </h1>
                    <div className="max-w-sm mt-3 text-[18px] text-slate-300">
                      Ask questions and get assistance with workflows instantly. Vortexe is your personal assistance, ready to help you whenever.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
