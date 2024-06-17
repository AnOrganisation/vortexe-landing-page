'use client'

import { useState } from 'react'
import Image from 'next/image'
import Illustration from '@/public/images/features-illustration-02.svg'
import FeaturesImage from '@/public/images/features-image.png'

export default function Features02() {

  const [category, setCategory] = useState<string>('1')

  return (
    <section className="relative border-t border-slate-800">
      {/* Bg gradient: top */}
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-800 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 mt-40 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" width="1440" height="453" alt="Features 02 Illustration" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk">Features to help you create your best designs</h2>
          </div>
          {/* Box */}
          <div className="bg-slate-800 bg-opacity-60 rounded overflow-hidden">
            <div className="flex flex-col md:flex-row items-end md:items-start md:justify-between lg:space-x-20">
              <div className="md:min-w-[28rem] p-6 lg:p-10">
                {/* Filters */}
                <div className="mb-6 lg:mb-8">
                  <div className="flex flex-wrap -m-1.5">
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${category === '1' ? 'text-white bg-indigo-500' : 'text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600'
                        }`}
                      onClick={() => setCategory('1')}
                    >
                      Everyone
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${category === '2' ? 'text-white bg-indigo-500' : 'text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600'
                        }`}
                      onClick={() => setCategory('2')}
                    >
                      Artists
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${category === '3' ? 'text-white bg-indigo-500' : 'text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600'
                        }`}
                      onClick={() => setCategory('3')}
                    >
                      Organizations
                    </button>
                  </div>
                </div>
                {/* Content */}
                <div>
                  <div className={`${category !== '1' && 'hidden'}`}>
                    <h3 className="h3 font-hkgrotesk mb-2">Easy to Use AI</h3>
                    <div className="text-lg text-slate-500">
                    Say goodbye to the hassle of navigating complex AI chatboxes. With just a click, you can achieve quick and reliable results. 
                    Our intuitive interface makes powerful AI tools accessible without the need for extensive learning. 
                    Now, you can effortlessly harness the AI capabilities you've always wanted, all within a familiar and user-friendly platform.
                    </div>
                  </div>
                  <div className={`${category !== '2' && 'hidden'}`}>
                    <h3 className="h3 font-hkgrotesk mb-2">Your Time is Valuable</h3>
                    <div className="text-lg text-slate-500">
                    Eliminate artist's block and enhance your workflow with our all-in-one AI tools. 
                    Store and manage your art concepts in one convenient workspace, allowing AI to iterate and expand on your ideas. 
                    Whether you're creating mood boards or design documentations, our platform helps you optimize 
                    your workflow, reduce administrative tasks, and focus on what you do best—creating stunning visual artwork.
                    </div>
                  </div>
                  <div className={`${category !== '3' && 'hidden'}`}>
                    <h3 className="h3 font-hkgrotesk mb-2">Streamline Operations</h3>
                    <div className="text-lg text-slate-500">
                    Empower your company with essential AI tools that streamline your operations. 
                    Build a customized pipeline to boost production speed and eliminate redundant tasks, 
                    maximizing efficiency and productivity. Experience seamless integration and watch your 
                    business achieve new levels of success with our cutting-edge solutions.
                    </div>
                  </div>
                </div>
              </div>
              <Image src={FeaturesImage} className="md:max-w-none" width="480" height="414" alt="Feature" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}