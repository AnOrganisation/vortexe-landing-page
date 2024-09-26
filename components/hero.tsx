import Image from "next/image";
import Link from "next/link";

import HeroImage from "@/public/images/Workspace_HeroImage.png";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative max-w-7xl px-4 mx-auto sm:px-6">
        <div className="pt-32 md:pt-40">
          {/* Hero content */}
          <div className="max-w-5xl mx-auto text-center">
            <h1
              className="mb-10 text-xl md:text-7xl font-hkgrotesk"
              data-aos="fade-up"
            >
              Transform Your Workflow:
            </h1>
            <h1
              className="mb-10 text-xl md:text-7xl font-hkgrotesk"
              data-aos="fade-up"
            >
              <span style={{
                  background: 'linear-gradient(90deg, #6366F1, #63f1d2)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
              }}
            >
              Build, Use, Sell
              </span>


            </h1>
            <p
              className="mb-10 text-3xl text-[#ffffff] px-14 "
              data-aos="fade-up"
              data-aos-delay="100"
            >
              A no-code, AI workflow editor and marketplace where you can  seamlessly design, automate, and sell custom AI solutions to solve 
              real world business problems. 
            </p>
            <div
              className="max-w-xs mx-auto space-y-4 sm:max-w-none sm:inline-flex sm:justify-center sm:space-y-0 sm:space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <Link
                  className="w-full text-white border-2 border-white bg-transparent shadow-sm btn hover:bg-white hover:text-black group rounded-full"
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
