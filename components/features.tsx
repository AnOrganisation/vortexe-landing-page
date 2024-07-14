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
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="mb-4 h2 font-hkgrotesk">
            Boost Your Productivity with Our AI-Powered Workspace
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-slate-500">
              Access AI tools in a secure, unified workspace with a familiar interface designed for small businesses.
              </p>
            </div>
          </div>
          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="carousel swiper-container">
            <div className="swiper-wrapper">
              {/* Carousel items */}
              {/* Workspaces */}
              <div className="flex flex-col h-auto p-6 rounded swiper-slide bg-slate-800">
                <Image
                  className="mb-3"
                  src={FeaturesIcon01}
                  width={56}
                  height={56}
                  alt="Icon 01"
                />
                <div className="grow">
                  <div className="text-xl font-bold font-hkgrotesk">
                    Workspaces
                  </div>
                  <div className="mb-9 text-slate-500">
                    Users can upload, create, and let the AI tools work on the
                    files all in one place.
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
              <div className="flex flex-col h-auto p-6 rounded swiper-slide bg-slate-800">
                <Image
                  className="mb-3"
                  src={FeaturesIcon02}
                  width={56}
                  height={56}
                  alt="Icon 02"
                />
                <div className="grow">
                  <div className="text-xl font-bold font-hkgrotesk">
                    Files
                  </div>
                  <div className="mb-3 text-slate-500">
                    Get more done in a workspace that supports all types, from
                    PDF to MP4, for upload and download.
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
              <div className="flex flex-col h-auto p-6 rounded swiper-slide bg-slate-800">
                <Image
                  className="mb-3"
                  src={FeaturesIcon03}
                  width={56}
                  height={56}
                  alt="Icon 03"
                />
                <div className="grow">
                  <div className="text-xl font-bold font-hkgrotesk">
                    Scalability
                  </div>
                  <div className="mb-3 text-slate-500">
                    The dynamic workspaces will allow for seamless organization
                    throughout the lifecycle of your project.
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
              <div className="flex flex-col h-auto p-6 rounded swiper-slide bg-slate-800">
                <Image
                  className="mb-3"
                  src={FeaturesIcon04}
                  width={56}
                  height={56}
                  alt="Icon 04"
                />
                <div className="grow">
                  <div className="text-xl font-bold font-hkgrotesk">
                    Organization
                  </div>
                  <div className="mb-3 text-slate-500">
                    No more scrolling through hundreds of chats. Allow the power
                    of AI to organize various files within your workspace.
                  </div>
                </div>
                <div className="text-right">
                  {/* <a className="inline-flex items-center font-medium text-indigo-500 transition duration-150 ease-in-out group" href="#0">
                    Learn More{' '}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </a> */}
                </div>
              </div>
              {/* Productivity */}
              <div className="flex flex-col h-auto p-6 rounded swiper-slide bg-slate-800">
                <Image
                  className="mb-3"
                  src={FeaturesIcon04}
                  width={56}
                  height={56}
                  alt="Icon 04"
                />
                <div className="grow">
                  <div className="text-xl font-bold font-hkgrotesk">
                    Productivity
                  </div>
                  <div className="mb-9 text-slate-500">
                    Let AI do the work for you, no more time consuming
                    repetitive tasks.
                  </div>
                </div>
                <div className="text-right">
                  {/* <a className="inline-flex items-center font-medium text-indigo-500 transition duration-150 ease-in-out group" href="#0">
                    Learn More{' '}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          {/* Arrows */}
          <div className="flex justify-end mt-12 space-x-4">
            <button className="relative z-20 flex items-center justify-center transition duration-150 ease-in-out border rounded-full carousel-prev w-14 h-14 group border-slate-700 bg-slate-800 hover:bg-slate-700">
              <span className="sr-only">Previous</span>
              <svg
                className="w-4 h-4 transition duration-150 ease-in-out fill-slate-400"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="relative z-20 flex items-center justify-center transition duration-150 ease-in-out border rounded-full carousel-next w-14 h-14 group border-slate-700 bg-slate-800 hover:bg-slate-700">
              <span className="sr-only">Next</span>
              <svg
                className="w-4 h-4 transition duration-150 ease-in-out fill-slate-400"
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
