import Link from "next/link";
import { useEffect, useState } from "react";

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
        className={`text-gray-600 body-font w-full fixed z-50 ${
          isScrolled && "bg-[#FFCC00]"
        }`}
      >
        <div className="flex flex-col md:flex-row p-5 items-center space-x-2 md:space-x-10">
          <div className="w-auto mx-5">
            <Link href="/" className="content-center">
              <img className="h-6 my-3" src="/logo.svg" alt="logo" />
            </Link>
          </div>
          <ul className="hidden space-x-4 md:flex">
            <li className="headerLink cursor-default font-semibold text-black hover:text-black">
              Home
            </li>
            <li className="headerLink">About</li>
            <li className="headerLink">Contact Us</li>
            <li className="headerLink">Tracking</li>
          </ul>
          <div className="flex flex-col sm:flex-row"></div>
        </div>
      </header>
    </>
  );
};
export default Header;
