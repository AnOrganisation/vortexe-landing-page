import Link from "next/link";
import VortexLogo from "@/public/images/VortexeLogo.svg";
import Image from "next/image";
export default function Header({ nav = true }: { nav?: boolean }) {
  return (
    <header className="absolute z-30 w-full">
      <div className="max-w-6xl px-4 mx-auto sm:px-2">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex flex-row mr-4 items-bottom shrink-0">
            {/* Logo */}
            <Link className="block" href="/" aria-label="Vortexe">
              <Image
                src={VortexLogo}
                alt="vortexe ai logo"
                width={36}
                height={26}
              />
            </Link>
              <p className="-ml-10 mt-1 text-3xl text-[#ffffff] px-14 " >
              VortexeAI
              </p>
          </div>
          {/* Desktop navigation */}
          {nav && (
            <nav className="flex grow">
              {/* Desktop sign in links */}
              <ul className="flex flex-wrap items-center justify-end grow">
                <li>
                  <Link
                    className="items-center hidden px-3 py-2 font-medium transition duration-150 ease-in-out text-slate-500 hover:text-slate-300 lg:px-5"
                    href="/signin"
                  >
                    Sign in
                  </Link>
                </li>
                <li className="ml-3">
                  <Link
                    className="w-full text-white border-2 border-white bg-transparent shadow-sm btn-sm hover:bg-white group rounded-full hover:text-black"
                    href="/signup"
                  >
                    Get Started{" "}
                    <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 group-hover:text-black">
                      -&gt;
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
