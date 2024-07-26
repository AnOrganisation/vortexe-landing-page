import Link from "next/link";
import VortexLogo from "@/public/images/VortexeLogo.svg";
import Image from "next/image";
export default function Header({ nav = true }: { nav?: boolean }) {
  return (
    <header className="absolute z-30 w-full">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex flex-row mr-4 shrink-0">
            {/* Logo */}
            <Link className="block" href="/" aria-label="Vortexe">
              <Image
                src={VortexLogo}
                alt="vortexe ai logo"
                width={36}
                height={26}
              />
            </Link>
          </div>
          {/* Desktop navigation */}
          {nav && (
            <nav className="flex grow">
              {/* Desktop sign in links */}
              <ul className="flex flex-wrap items-center justify-end grow">
                <li>
                  <Link
                    className="flex items-center hidden px-3 py-2 font-medium transition duration-150 ease-in-out text-slate-500 hover:text-slate-300 lg:px-5"
                    href="/signin"
                  >
                    Sign in
                  </Link>
                </li>
                <li className="ml-3">
                  <Link
                    className="w-full text-white bg-indigo-500 shadow-sm btn-sm hover:bg-indigo-600 group"
                    href="/signup"
                  >
                    Get Started{" "}
                    <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
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
