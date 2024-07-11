import Image from "next/image";
import Link from "next/link";

import HeroImage from "@/public/images/hero-image.png";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-32 md:pt-40">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 h1 font-hkgrotesk" data-aos="fade-up">
              AI for Everyone
            </h1>
            <p
              className="mb-10 text-xl px-14 text-slate-500 "
              data-aos="fade-up"
              data-aos-delay="100"
            >
              A familiar and user friendly workspace, making the latest AI tools
              accessible for everyday users.
            </p>
            <div
              className="max-w-xs mx-auto space-y-4 sm:max-w-none sm:inline-flex sm:justify-center sm:space-y-0 sm:space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <Link
                  className="w-full text-white bg-indigo-500 shadow-sm btn hover:bg-indigo-600 group"
                  href="/signup"
                >
                  Join Waitlist{" "}
                  <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
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
