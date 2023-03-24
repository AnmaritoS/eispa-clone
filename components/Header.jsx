import Link from "next/link";
import { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`text-gray-600 body-font ml-4 md:ml-0 w-full fixed z-50 ${
          isScrolled && "bg-[#FFCC00]"
        }`}
      >
        <div className="flex md:flex-row p-5 items-center space-x-2 md:space-x-10">
          <div className="burgerIcon">
            <BurgerMenu />
          </div>
          <div className="w-auto md:mx-5">
            <Link href="/" className="content-center">
              <div
                className={`${
                  isScrolled && " shadow-md shadow-[gray] rounded-xl"
                } p-1.5 `}
              >
                <img className="h-6 my-3 " src="/logo.svg" alt="logo" />
              </div>
            </Link>
          </div>
          <ul className="hidden space-x-4 md:flex">
            <Link href="/">
              <li className="headerLink cursor-default font-semibold text-black hover:text-black/70">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="headerLink cursor-default font-semibold text-black hover:text-black/70">
                About
              </li>
            </Link>
            <Link href="/contact">
              <li className="headerLink cursor-default font-semibold text-black hover:text-black/70">
                Contact Us
              </li>
            </Link>
            <Link href="/tracking">
              <li className="headerLink cursor-default font-semibold text-black hover:text-black/70">
                Tracking
              </li>
            </Link>
          </ul>

          <div className="flex flex-col sm:flex-row"></div>
        </div>
      </header>
    </>
  );
};
export default Header;
