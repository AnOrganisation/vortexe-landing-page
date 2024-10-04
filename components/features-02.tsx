"use client";

import { useState } from "react";
import Image from "next/image";
import Illustration from "@/public/images/features-illustration-02.svg";
import FeaturesImage from "@/public/images/ActionExample.png";
import FeaturesImage2 from "@/public/images/ChatBot.png";
import FeaturesImage3 from "@/public/images/Workspace_Simplified.png";

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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12 md:pb-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-hkgrotesk font-bold leading-tight">
              Simplicity at its core
            </h2>
          </div>
          {/* Box */}
          <div className="overflow-hidden rounded-2xl bg-[#6366F1] bg-opacity-10 border-2 border-[#6366F1] border-opacity-20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between lg:space-x-20">
              {/* Text Content */}
              <div className="w-full md:w-1/2 p-6 lg:p-10">
                {/* Filters */}
                <div className="mb-6 lg:mb-8">
                  <div className="flex flex-wrap -m-1.5">
                    <button
                      className={`px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === "1"
                          ? "text-black bg-white"
                          : "text-slate-300 bg-transparent border border-white hover:bg-slate-600"
                      }`}
                      onClick={() => setCategory("1")}
                    >
                      Build
                    </button>
                    <button
                      className={`px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === "2"
                          ? "text-black bg-white"
                          : "text-slate-300 bg-transparent border border-white hover:bg-slate-600"
                      }`}
                      onClick={() => setCategory("2")}
                    >
                      Use
                    </button>
                    <button
                      className={`px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === "3"
                          ? "text-black bg-white"
                          : "text-slate-300 bg-transparent border border-white hover:bg-slate-600"
                      }`}
                      onClick={() => setCategory("3")}
                    >
                      Sell
                    </button>
                  </div>
                </div>
                {/* Content */}
                <div>
                  <div className={`${category !== "1" ? "hidden" : ""}`}>
                    <h3 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-semibold font-hkgrotesk">
                      Easy Workflow Building
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-slate-300">
                      Building a workflow with Vortexe is as simple as playing with Legos. Our user-friendly
                      interface guides you through each step clearly and intuitively,
                      ensuring you can easily understand and execute every part of the
                      process without any technical jargon.
                    </p>
                  </div>
                  <div className={`${category !== "2" ? "hidden" : ""}`}>
                    <h3 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-semibold font-hkgrotesk">
                      Task Automation
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-slate-300">
                      Streamline your business operations with our intuitive platform, where automating tasks like
                      event-triggered email campaigns and on-demand report generation is as straightforward as tapping a button.
                      Manage all your workflows effortlessly in one place—start, stop, or pause them at your convenience, allowing you to focus on what truly matters.
                    </p>
                  </div>
                  <div className={`${category !== "3" ? "hidden" : ""}`}>
                    <h3 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-semibold font-hkgrotesk">
                      Make a Profit
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-slate-300">
                      The purpose of the Marketplace is to provide high-quality workflows to
                      Vortexe users for their businesses or development projects. Every workflow
                      will be crafted by individuals who are experts in the related fields.
                    </p>
                  </div>
                </div>
              </div>
              {/* Image */}
              <div className="w-full md:w-1/2 p-6 lg:p-10 flex justify-center">
                {category === "1" && (
                  <Image
                    src={FeaturesImage}
                    className="w-full h-auto object-contain"
                    width={480}
                    height={414}
                    alt="Easy Workflow Building"
                    priority
                  />
                )}
                {category === "2" && (
                  <Image
                    src={FeaturesImage2}
                    className="w-full h-auto object-contain"
                    width={480}
                    height={414}
                    alt="Task Automation"
                  />
                )}
                {category === "3" && (
                  <Image
                    src={FeaturesImage3}
                    className="w-full h-auto object-contain"
                    width={480}
                    height={414}
                    alt="Make a Profit"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
