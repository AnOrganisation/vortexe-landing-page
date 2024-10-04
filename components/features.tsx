"use client";

import { useEffect } from "react";
import Image from "next/image";
import Illustration from "@/public/images/features-illustration.svg";
import FeaturesIcon01 from "@/public/images/features-icon-01.svg";
import FeaturesIcon02 from "@/public/images/features-icon-02.svg";
import FeaturesIcon03 from "@/public/images/features-icon-03.svg";
import FeaturesIcon04 from "@/public/images/features-icon-04.svg";

// Import Swiper
import Swiper, { Autoplay, Navigation } from "swiper";
import "swiper/swiper.min.css";
Swiper.use([Autoplay, Navigation]);

export default function Features() {
  useEffect(() => {
    const carousel = new Swiper(".carousel", {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
    });
  }, []);

  return (
    <section className="relative">
      {/* Bg illustration */}
      <div
        className="absolute -mt-20 -translate-x-1/2 pointer-events-none left-1/2 -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          width="1440"
          height="440"
          alt="Illustration"
        />
      </div>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-8xl pb-12 mx-auto text-center md:pb-20">
            <h1 className="mb-4 sm:mb-6 md:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-hkgrotesk">
              Building custom AI solutions just got a lot easier.
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300">
              VortexeAI believes that harnessing the power of AI should be seamless and intuitive for everyone, regardless of technical expertise. Our platform’s 
              intuitive no-code workflow editor is designed to simplify every step and guide you seamlessly through the entire process—no technical jargon required.
              </p>
            </div>
          </div>
          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="carousel swiper-container">
            <div className="swiper-wrapper">
              {/* Carousel items */}
              {/* Workspaces */}
              <div className="flex flex-col h-auto p-6 rounded-2xl swiper-slide bg-[#6366F1] bg-opacity-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-14 h-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                  />
                </svg>

                <div className="grow">
                  <div className="text-xl font-bold font-hkgrotesk">
                  AI-Powered Data Actions
                  </div>
                  <div className="text-white mb-9">
                  Unleash the power of AI to transform your data with precision. Our intuitive interface helps you craft tailored instructions, 
                  ensuring your AI delivers exceptional results—every time.
                  </div>
                </div>
                <div className="text-right">
                  {/* <a className="inline-flex items-center font-medium text-indigo-500 transition duration-150 ease-in-out group" href="#0">
                    Learn More{' '}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </a> */}
                </div>
              </div>
              {/* Files */}
              <div className="flex flex-col h-auto p-6 rounded-2xl swiper-slide bg-[#6366F1] bg-opacity-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-14 h-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                  />
                </svg>

                <div className="grow">
                  <div className="text-xl font-bold font-hkgrotesk">
                  Workflow Customization
                  </div>
                  <div className="text-white mb-9">
                  Chain actions to build customizable workflows for unique outcomes. Manage your workflows at a glance from a dedicated dashboard and edit them in
                  a workspace.
                  </div>
                </div>
                <div className="text-right">
                  {/* <a className="inline-flex items-center font-medium text-indigo-500 transition duration-150 ease-in-out group" href="#0">
                    Learn More{' '}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </a> */}
                </div>
              </div>
              {/* Scalability */}
              <div className="flex flex-col h-auto p-6 rounded-2xl swiper-slide bg-[#6366F1] bg-opacity-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-14 h-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>

                <div className="grow">
                  <div className="text-xl font-bold font-hkgrotesk">
                    Diverse AI Models
                  </div>
                  <div className="text-white mb-9">
                  Access the most popular AI models like ChatGPT, Claude 3.5, Llama out-of-the-box. Don't know which model to use? No worries, get auto-suggestions for the best AI models suited to each task.
                  </div>
                </div>
                <div className="text-right">
                  {/* <a className="inline-flex items-center font-medium text-indigo-500 transition duration-150 ease-in-out group" href="#0">
                    Learn More{' '}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </a> */}
                </div>
              </div>
              {/* Organization */}
              <div className="flex flex-col h-auto p-6 rounded-2xl swiper-slide bg-[#6366F1] bg-opacity-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-14 h-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>

                <div className="grow">
                  <div className="text-xl font-bold font-hkgrotesk">
                  Multi-Modal AI Workflows
                  </div>
                  <div className="mb-[60px] text-white">
                  Personalize each action within a workflow by picking the most appropriate AI model. No more one-size-fits-all model with generic responses.
                  </div>
                </div>
                <div className="text-right"></div>
              </div>
              {/* Productivity */}
              <div className="flex flex-col h-auto p-6 rounded-2xl swiper-slide bg-[#6366F1] bg-opacity-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-14 h-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>

                <div className="grow">
                  <div className="text-xl font-bold font-hkgrotesk">
                    Run Automations Your Way
                  </div>
                  <div className="mb-[60px] text-white">
                  Automate workflows to run based on schedules, specific triggers, or whenever needed, even while you’re away.
                  </div>
                </div>
                <div className="text-right">
                  {/* <a className="inline-flex items-center font-medium text-indigo-500 transition duration-150 ease-in-out group" href="#0">
                    Learn More{' '}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </a> */}
                </div>
              </div>
              {/* More */}
              <div className="flex flex-col h-auto p-6 rounded-2xl swiper-slide bg-[#6366F1] bg-opacity-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-14 h-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <div>
                  <div className="text-xl font-bold font-hkgrotesk">
                  Seamless Connectivity
                  </div>
                  <div className="text-white mb-9">
                  Easily choose how you input your data and customize how you receive results. 
                  From API endpoints to files or pre-integrated platforms, it's all designed to fit your workflow perfectly.
                  </div>
                </div>
                <div className="text-right">
                  {/* <a className="inline-flex items-center font-medium text-indigo-500 transition duration-150 ease-in-out group" href="#0">
                    Learn More{' '}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </a> */}
                </div>
              </div>
              {/* More */}
              <div className="flex flex-col h-auto p-6 rounded-2xl swiper-slide bg-[#6366F1] bg-opacity-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-14 h-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <div>
                  <div className="text-xl font-bold font-hkgrotesk">
                  Marketplace
                  </div>
                  <div className="text-white mb-9">
                  Share your workflow on the marketplace for a one-time fee and start earning. Turn your expertise into passive 
                  income while receiving reviews from users to help you grow and refine your offerings.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Arrows */}
          <div className="flex justify-center mt-12 space-x-20">
            <button className="relative z-0 flex items-center justify-center transition duration-150 ease-in-out border rounded-full carousel-prev w-14 h-14 group border-[#6366F1] bg-[#6366F1] bg-opacity-40 hover:bg-[#6366F1] hover:opacity-70">
              <span className="sr-only">Previous</span>
              <svg
                className="w-4 h-4 transition duration-150 ease-in-out fill-white"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="relative z-0 flex items-center justify-center transition duration-150 ease-in-out border rounded-full carousel-next w-14 h-14 group border-[#6366F1] bg-[#6366F1] bg-opacity-40 hover:bg-[#6366F1] hover:opacity-70">
              <span className="sr-only">Next</span>
              <svg
                className="w-4 h-4 transition duration-150 ease-in-out fill-white"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
