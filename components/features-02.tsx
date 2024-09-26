"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Illustration from "@/public/images/features-illustration-02.svg";
import FeaturesImage from "@/public/images/ActionExample.png";
import FeaturesImage2 from "@/public/images/ChatBot.png";
import FeaturesImage3 from "@/public/images/Workspace_Simplified.png";

export default function Features02() {
  const [category, setCategory] = useState<string>("1");
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    // Set initial screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          className=" max-w-none"
          width="1440"
          height="453"
          alt="Features 02 Illustration"
        />
      </div>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="h2 font-hkgrotesk">
              Simplicity at its core{" "}
            </h2>
          </div>
          {/* Box */}
          <div className="overflow-hidden rounded-2xl bg-[#6366F1] bg-opacity-10 border-2 border-[#6366F1] border-opacity-20">
            <div className="flex flex-col items-end md:flex-row md:items-start md:justify-between lg:space-x-20">
              <div className="md:min-w-[28rem] p-6 lg:p-10">
                {/* Filters */}
                <div className="mb-6 lg:mb-8">
                  <div className="flex flex-wrap -m-1.5">
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === "1"
                          ? "text-black bg-white"
                          : "text-slate-300 bg-transparent border-white border-1 hover:bg-slate-600"
                      }`}
                      onClick={() => setCategory("1")}
                    >
                      Build
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === "2"
                          ? "text-black bg-white"
                          : "text-slate-300 bg-transparent border-white border-1 hover:bg-slate-600"
                      }`}
                      onClick={() => setCategory("2")}
                    >
                      Use
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === "3"
                          ? "text-black bg-white"
                          : "text-slate-300 bg-transparent border-white border-1 hover:bg-slate-600"
                      }`}
                      onClick={() => setCategory("3")}
                    >
                      Sell
                    </button>
                  </div>
                </div>
                {/* Content */}
                <div>
                  <div className={`${category !== "1" && "hidden"}`}>
                    <h3 className="mb-2 h3 font-hkgrotesk">Easy Workflow Building</h3>
                    <div className="text-lg text-slate-350">
                    Building a workflow with Vortexe is as simple as playing with Legos. Our user-friendly 
                    interface guides you through each step clearly and intuitively, 
                    ensuring you can easily understand and execute every part of the 
                    process without any technical jargon.
                    </div>
                  </div>
                  <div className={`${category !== "2" && "hidden"}`}>
                    <h3 className="mb-2 h3 font-hkgrotesk">
                      Task Automation
                    </h3>
                    <div className="text-lg text-slate-350">
                    Streamline your business operations with our intuitive platform, where automating tasks like 
                    event-triggered email campaigns and on-demand report generation is as straightforward as tapping a button. 
                    Manage all your workflows effortlessly in one place—start, stop, or pause them at your convenience, allowing you to focus on what truly matters. 
                    </div>
                  </div>
                  <div className={`${category !== "3" && "hidden"}`}>
                    <h3 className="mb-2 h3 font-hkgrotesk">
                      Make a Profit
                    </h3>
                    <div className="text-lg text-slate-350">
                    The purpose of the Marketplace is to provide high-quality workflows to 
                    Vortexe users for their businesses or development projects. Every workflow
                    will be crafted by individuals who are experts in the related fields. 
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src={FeaturesImage}
                className={`${
                  category !== "1" && "hidden"
                } mt-32 md:max-w-none`}
                style={{ marginRight: isLargeScreen ? "2.5rem" : "0" }}
                width="480"
                height="414"
                alt="Action"
              />
              <Image
                src={FeaturesImage2}
                className={`${
                  category !== "2" && "hidden"
                } mt-32 md:max-w-none`}
                style={{ marginRight: isLargeScreen ? "2.5rem" : "0" }}
                width="480"
                height="414"
                alt="Action"
              />
              <Image
                src={FeaturesImage3}
                className={`${
                  category !== "3" && "hidden"
                } mt-32 md:max-w-none`}
                style={{ marginRight: isLargeScreen ? "2.5rem" : "0" }}
                width="480"
                height="414"
                alt="Action"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
