"use client";

import { useState } from "react";
import Image from "next/image";
import Illustration from "@/public/images/features-illustration-02.svg";
import FeaturesImage from "@/public/images/ActionExample.png";

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
              Features to help you simplify your daily tasks{" "}
            </h2>
          </div>
          {/* Box */}
          <div className="overflow-hidden rounded bg-slate-800 bg-opacity-60">
            <div className="flex flex-col items-end md:flex-row md:items-start md:justify-between lg:space-x-20">
              <div className="md:min-w-[28rem] p-6 lg:p-10">
                {/* Filters */}
                <div className="mb-6 lg:mb-8">
                  <div className="flex flex-wrap -m-1.5">
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === "1"
                          ? "text-white bg-indigo-500"
                          : "text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600"
                      }`}
                      onClick={() => setCategory("1")}
                    >
                      Workflows
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === "2"
                          ? "text-white bg-indigo-500"
                          : "text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600"
                      }`}
                      onClick={() => setCategory("2")}
                    >
                      Personal Assistant
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === "3"
                          ? "text-white bg-indigo-500"
                          : "text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600"
                      }`}
                      onClick={() => setCategory("3")}
                    >
                      Workspace
                    </button>
                  </div>
                </div>
                {/* Content */}
                <div>
                  <div className={`${category !== "1" && "hidden"}`}>
                    <h3 className="mb-2 h3 font-hkgrotesk">Streamline Tasks</h3>
                    <div className="text-lg text-slate-350">
                      Automate tedious tasks with Vortexe AI, designed for small
                      businesses. No need to learn AI or choose the right
                      tools—we do it for you. Simply select tasks like crafting
                      marketing pitches, generating personalized emails,
                      scheduling content creation, or simply summarizing
                      documentation. Our unified workspace lets you harness AI
                      workflows to streamline operations, allowing you to focus
                      on what you do best, be it content creation or product
                      development.
                    </div>
                  </div>
                  <div className={`${category !== "2" && "hidden"}`}>
                    <h3 className="mb-2 h3 font-hkgrotesk">
                      Your Time is Valuable
                    </h3>
                    <div className="text-lg text-slate-350">
                      Your time is valuable, and Vortexe AI ensures you make the
                      most of it. Our workspace organizes all your files in one
                      place, making it easy to manage and access your data. With
                      the Vortexe assistant, you can ask questions about your
                      uploaded data, turning it into your personal intelligent
                      database. Need to know if you've created content on a
                      specific subject? Just ask Vortexe, and it will search
                      through your files to provide the answers you need.
                      Simplify your workflow and focus on what matters most with
                      Vortexe AI.
                    </div>
                  </div>
                  <div className={`${category !== "3" && "hidden"}`}>
                    <h3 className="mb-2 h3 font-hkgrotesk">
                      Personalized Operations
                    </h3>
                    <div className="text-lg text-slate-350">
                      Transform your workflow with Vortexe AI's customizable
                      workspace. Tailor it to fit your business needs by saving
                      files and utilizing AI tools directly within the platform.
                      Create multiple workspaces for different projects and use
                      our tagging system to keep track of all your data in one
                      spot. Say goodbye to endless folder searches and
                      streamline your operations with ease. Customize, organize,
                      and optimize your business with Vortexe AI.
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src={FeaturesImage}
                className="mt-32 mr-10 md:max-w-none"
                style={{ marginRight: "2.5rem" }}
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
