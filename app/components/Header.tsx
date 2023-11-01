"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState, useEffect } from "react";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set the initial windowWidth on the client side
      setWindowWidth(window.innerWidth);
    }

    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setHasScrolled(true);
        } else {
          setHasScrolled(false);
        }
      };

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      if (typeof window !== "undefined") {
        window.addEventListener("resize", handleResize);
        // Attach the event listener for scroll as well if needed
        // window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("resize", handleResize);
        };
      }
    }
  }, []);

  const toggleMenu = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setShowMenu((prevShowMenu) => !prevShowMenu);
      console.log("showMenu", showMenu);
    } else {
      setShowMenu(false);
      console.log("false");
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white dark:bg-gray-dark transition duration-300" ${
        hasScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-center lg:justify-around justify-between lg:py-0 lg:px-0 p-4">
        <Link href="/" className=" hover:scale-110 duration-200">
          <img className="h-10" src="/assets/images/logo-full.png" alt="logo" />
        </Link>
        <div className="flex items-center">
          <div
            onClick={toggleMenu}
            className={`overlay fixed inset-0 z-[51] bg-white dark:bg-black/60 lg:hidden transition-all   ${
              showMenu ? "" : "hidden"
            }`}
          ></div>

          {(showMenu || windowWidth >= 1024) && (
            <div
              className={`menus  ${
                showMenu ? "overflow-y-auto ltr:!right-0 rtl:!left-0" : ""
              }`}
            >
              <div className="flex justify-end border-b border-gray/10 ltr:text-right rtl:text-left lg:hidden">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="pt-2 h-10 w-10 rounded-full text-gray dark:text-white hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul onClick={() => setShowMenu(false)}>
                <li>
                  <Link
                    href="/"
                    passHref
                    className={`text-gray dark:text-white "  ${
                      pathname === "/" ? "active" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-fund"
                    className={`text-gray whitespace-nowrap dark:text-white" 
                             ${pathname === "/our-fund" ? "active" : ""}`}
                  >
                    Our Fund
                  </Link>
                </li>
                <li
                  className="group relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    className={`text-gray dark:text-white ${
                      showMenu || "isSubmenuActive()" ? "active" : ""
                    }`}
                  >
                    Services
                    <div className="transition duration-500 group-hover:rotate-180 ltr:ml-1 rtl:mr-1">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 9L12 15L10.25 13.5M5 9L7.33333 11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                  {
                    <div className="submenu">
                      <a
                        href="/borro-liqueous"
                        className={
                          pathname === "/borro-liqueous" ? "active" : ""
                        }
                      >
                        BORRO by Liqueous
                      </a>
                      <a
                        href="/private-block"
                        className={
                          pathname === "/private-block" ? "active" : ""
                        }
                      >
                        Private Block Purchase
                      </a>
                      <a
                        href="/equity-lines"
                        className={pathname === "/equity-lines" ? "active" : ""}
                      >
                        Equity Lines of Credit
                      </a>
                      <a
                        href="/financial-solution"
                        className={
                          pathname === "/financial-solution" ? "active" : ""
                        }
                      >
                        Comprehensive Financial Solutions
                      </a>
                    </div>
                  }
                </li>

                {/* <li>
                  <Link
                    href="/blogs"
                    className={`text-gray whitespace-nowrap dark:text-white" 
                             ${pathname === '/blogs' ? "text-primary" : ""}`}
                  >
              
                    Blog
               
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/contact-us"
                    className={`text-gray whitespace-nowrap dark:text-white" 
                             ${
                               pathname === "/contact-us" ? "text-primary" : ""
                             }`}
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="relative hidden items-center before:absolute before:top-1/2 before:h-[30px] before:w-[2px] before:-translate-y-1/2 before:bg-gray/30 ltr:before:-left-[2px] rtl:before:-right-[2px] lg:inline-flex"></li>
                <li className="block lg:hidden">
                  <Link
                    href="{{loginUrl}}"
                    className="text-gray cursor-pointer"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link href="tel:+18665303357">
                    <button className="btn mx-auto block w-fit mr-auto ml-auto bg-primary text-white rounded-full py-2">
                      866-530-3357<p className="text-[0.6rem]">CALL US TODAY</p>
                    </button>
                  </Link>
                </li>
                <li className="hidden lg:block">
                  <Link
                    href="{{loginUrl}}"
                    className="text-gray cursor-pointer"
                  >
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M2 15H11C11.552 15 12 15.447 12 16C12 16.553 11.552 17 11 17H2C1.448 17 1 16.553 1 16C1 15.447 1.448 15 2 15Z"
              fill="currentColor"
            />
            <path
              d="M2 8H20C20.552 8 21 8.447 21 9C21 9.553 20.552 10 20 10H2C1.448 10 1 9.553 1 9C1 8.447 1.448 8 2 8Z"
              fill="currentColor"
            />
            <path
              d="M21 2C21 1.447 20.552 1 20 1H7C6.448 1 6 1.447 6 2C6 2.553 6.448 3 7 3H20C20.552 3 21 2.553 21 2Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
