import Image from 'next/image'
import Link from 'next/link'
import Illustration from '@/public/images/cta-illustration.svg'

export default function Cta() {
  return (
    <section className="relative border-t border-slate-800">
      {/* Bg gradient: top */}
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-800 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -mt-8 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" alt="Features 01 Illustration" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 sm:py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-2xl mx-auto text-center pb-8 sm:pb-12 md:pb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-hkgrotesk font-bold">Build your own AI micro-services within seconds.</h2>
          </div>
          {/* Buttons */}
          <div className="text-center">
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div data-aos="fade-up" data-aos-delay="100">
                <Link className="btn text-white bg-transparent border-2 border-white hover:bg-white hover:text-black w-full shadow-sm group rounded-full" href="/signup">
                  Chat with us!{' '}
                  <span className="tracking-normal text-white group-hover:translate-x-0.5 group-hover:text-black transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                {/* <a className="btn text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600 w-full shadow-sm" href="#0">
                  Read Docs
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}