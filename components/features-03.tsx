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
          <div className="overflow-hidden">
            <div className="flex flex-col items-end md:flex-row md:items-start md:justify-between lg:space-x-20">
              <div className="md:min-w-[28rem] p-6 lg:p-10">
                {/* Content */}
                <div>
                  <h1
                    className="mb-6 text-9xl font-hkgrotesk"
                    data-aos="fade-up"
                  >
                    Just <span className="text-[#6366F1]">one click</span>...
                  </h1>
                  <h3 className="text-7xl font-hkgrotesk">
                    That's all you need
                  </h3>
                  <div className="mt-3 ml-1 text-3xl text-slate-500">
                    If you know how to left click your mouse and know what a
                    button is, you can integrate AI into your small business
                    using VortexeAI.
                  </div>
                </div>
              </div>
              <Image
                src={FeaturesImage}
                className="md:max-w-none"
                width="200"
                height="100"
                alt="Feature"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
