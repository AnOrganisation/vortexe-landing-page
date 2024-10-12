import Image from "next/image";
import Link from "next/link";

import HeroImage from "@/public/images/Workspace_HeroImage.png";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6">
        <div className="pt-32 md:pt-40">
          {/* Hero content */}
          <div className="max-w-5xl mx-auto text-center">
            <h1
              className="mb-6 text-3xl sm:mb-8 md:mb-10 sm:text-4xl md:text-6xl lg:text-7xl font-hkgrotesk"
              data-aos="fade-up"
            >
              Rapidly prototype and test AI workflows
            </h1>
            <h1
              className="mb-6 text-3xl sm:mb-8 md:mb-10 sm:text-4xl md:text-6xl lg:text-7xl font-hkgrotesk"
              data-aos="fade-up"
            >
              <span
                style={{
                  background: "linear-gradient(90deg, #6366F1, #63f1d2)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "68px",
                }}
              >
                Low-Code AI Agent Editor
              </span>
            </h1>
            <p
              className="mb-6 sm:mb-8 md:mb-10 sm:text-lg md:text-xl lg:text-2xl text-[#ffffff] px-4 sm:px-8 md:px-14"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Vortexe lets you iterate quickly, integrate effortlessly, and
              produce functional results to test in real-world scenarios,
              adapting to ever-changing business needs.
            </p>
            <div
              className="max-w-xs mx-auto space-y-4 sm:max-w-none sm:inline-flex sm:justify-center sm:space-y-0 sm:space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <Link
                  className="w-full text-white bg-transparent border-2 border-white rounded-full shadow-sm btn hover:bg-white hover:text-black group"
                  href="/signup"
                >
                  Chat with us!{" "}
                  <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 group-hover:text-black">
                    -&gt;
                  </span>
                </Link>
              </div>
              <div>
                {/* <a
                  className="w-full shadow-sm btn text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600"
                  href="#0"
                >
                  Read Docs
                </a> */}
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="pt-16 md:pt-20"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              className="mx-auto"
              src={HeroImage}
              width={920}
              height={518}
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
