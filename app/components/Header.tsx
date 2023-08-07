"use client";
import Link from "next/link";

import { useState } from "react";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    if (window.innerWidth < 1024) {
      console.log("size less than 1024 pixels");
      setShowMenu((prevShowMenu) => !prevShowMenu);
    } else {
      setShowMenu(false);
      console.log("size greater than 1024 pixels");
    }
  };
  return (
    <header
      className={`sticky top-0 z-50 bg-white dark:bg-gray-dark transition duration-300" [ngClass]="headerClass" sticky-header`}
    >
      <div>
        <div className="flex items-center lg:justify-around justify-between lg:py-0 lg:px-0 p-4">
          <Link href="/" className=" hover:scale-110 duration-200">
            <img
              className="h-10"
              src="/assets/images/logo-full.png"
              alt="logo"
            />
          </Link>
          <div className="flex items-center">
            <div
              onClick={toggleMenu}
              className={`overlay fixed inset-0 z-[51] bg-white dark:bg-black/60 lg:hidden  ${
                showMenu ?"hidden" :""
              }`}
            ></div>
            
            <div
              className={`menus ${
                showMenu ? "":"overflow-y-auto ltr:!right-0 rtl:!left-0"
              }`}
            >
              <div className="border-b border-gray/10 ltr:text-right rtl:text-left lg:hidden">
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
                      true ? "text-primary" : ""
                    }`}
                  >
                    
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-fund"
                    className={`text-gray whitespace-nowrap dark:text-white" 
                             ${"router.url === '/our-fund'" ? "" : ""}`}
                  >
                    
                    Our Fund
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`text-gray whitespace-nowrap dark:text-white" 
                             ${"router.url === '/our-fund'" ? "" : ""}`}
                  >
                   
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className={`text-gray whitespace-nowrap dark:text-white" 
                             ${"router.url === '/our-fund'" ? "" : ""}`}
                  >
                   
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
           
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
      </div>
    </header>
  );
};

export default Header;
