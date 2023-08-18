import Link from "next/link";
import React from "react";

const Footer = () => {
  const legalText = `The information contained herein is presented solely for the purposes of discussion and under no circumstances should this be considered an offer to buy or a solicitation of an offer to sell any security. Liqueous LP is not a registered securities broker-dealer or an investment adviser with the U.S. Securities and Exchange Commission (the “SEC”) or with any state securities regulatory authority. Liqueous LP, its managers or affiliates have not been registered and do not plan to be registered under the Investment Advisers Act of 1940 or any similar state or foreign securities laws. Liqueous LP is not registered under the Investment Company Act of 1940 or under any similar state or international securities laws. Liqueous LP does not offer any form of investment (buy or sell) advice, tax counseling, estate planning, or any other securities or financial advice whatsoever. No statements on this website or any verbal or written statement by any representative shall be construed as such advice. We are neither licensed nor qualified to provide investment advice.`;
  return (
    <footer className="mt-auto bg-white dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.03] dark:to-transparent">
      <div className="overflow-x-hidden">
        <section className="bg-gradient-to-r from-[#dbeafe] p-10 dark:bg-none">
          <div className="relative z-[1] text-center text-white ">
            <h2 className="text-4xl font-extrabold leading-normal sm:text-6xl lg:text-[50px] lg:leading-[60px]">
              <span className="text-primary text-xl ">
                SAME DAY QUOTES
                <br className="lg:hidden md:hidden" />
                <span className="lg:inline md:inline">NO OBLIGATIONS</span>
              </span>
              <br />
              <span className="text-black dark:text-white">
                Liquidity Options
              </span>
              <br />
              <span className="text-primary">Liquidity Today </span>
              <span className="text-secondary">Dream Tomorrow</span> <br />
            </h2>
            <Link href="/get-estimate">
              <button className="btn mx-auto my-4 block w-fit  mr-auto ml-auto bg-primary text-white rounded-full">
                GET A QUOTE TODAY
              </button>
            </Link>
          </div>
        </section>
      </div>
      ;
      <div className="container">
        <div className="grid gap-y-10 gap-x-4 sm:grid-cols-1 lg:grid-cols-1 pt-14">
          <div className="relative">
            <div className="mb-3 text-lg font-extrabold text-black dark:text-white">
              Legal Notice
            </div>
            {/* {{legalText | uppercase}} */ legalText.toUpperCase()}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid gap-y-10 gap-x-4 sm:grid-cols-3 lg:grid-cols-4 pt-14">
          <div className="relative hidden md:flex">
            <img
              src="/assets/images/logo-full.png"
              alt="liqueous"
              className="h-7"
            />
            <ul className="mt-12 flex items-center gap-8"></ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3 ">
              <li className="mb-3 text-lg font-extrabold text-black dark:text-white">
                Quick Menu
              </li>
              <li>
                <Link
                  href="/"
                  className="inline-block transition hover:scale-110 hover:text-secondary"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/our-fund"
                  className="inline-block transition hover:scale-110 hover:text-secondary"
                >
                  Our Fund
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="inline-block transition hover:scale-110 hover:text-secondary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="inline-block transition hover:scale-110 hover:text-secondary"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3 ">
              <li className="mb-3 text-lg font-extrabold text-black dark:text-white">
                Legal
              </li>
              <li>
                <Link
                  href="/legal-notice"
                  className="inline-block transition hover:scale-110 hover:text-secondary"
                >
                  Legal Notice & Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="inline-block transition hover:scale-110 hover:text-secondary"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="inline-block transition hover:scale-110 hover:text-secondary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="inline-block transition hover:scale-110 hover:text-secondary"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3 text-black dark:text-gray ">
              <li className="mb-3 text-lg font-extrabold text-black dark:text-white">
                Join Newsletter
              </li>
              <li>
                Subscribe to our newsletter and get delivered the latest news
                about our products
              </li>
            </ul>
            <form>
              <div className="relative pt-6">
                <input
                  type="email"
                  id="default-search"
                  className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg rounded-full dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_b_884_375)">
                      <path
                        d="M0 16C0 7.16344 7.16344 0 16 0V0C24.8366 0 32 7.16344 32 16V16C32 24.8366 24.8366 32 16 32V32C7.16344 32 0 24.8366 0 16V16Z"
                        fill="#5C96FD"
                      />
                    </g>
                    <g filter="url(#filter1_b_884_375)">
                      <path
                        d="M19.504 11.8217L22.7348 15.3217C23.0884 15.7047 23.0884 16.2952 22.7348 16.6782L19.504 20.1783C19.1294 20.5841 18.4968 20.6094 18.091 20.2348C17.6851 19.8602 17.6598 19.2276 18.0344 18.8217L19.716 17L10 17C9.44771 17 9 16.5523 9 16C9 15.4477 9.44771 15 10 15L19.716 15L18.0344 13.1783C17.6598 12.7725 17.6851 12.1398 18.0909 11.7652C18.4968 11.3906 19.1294 11.4159 19.504 11.8217Z"
                        fill="#FCFCFD"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_b_884_375"
                        x="-10"
                        y="-10"
                        width="52"
                        height="52"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="5"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_884_375"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_884_375"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_b_884_375"
                        x="-1"
                        y="1.5"
                        width="34"
                        height="29"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="5"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_884_375"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_884_375"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="py-5 dark:border-t-2 dark:border-white/5 dark:bg-none">
        <div className="container">
          <hr className="h-px my-8 bg-gray/20 border-0 dark:bg-gray-700" />
          <div className="flex flex-col items-center justify-between text-center font-bold dark:text-white md:flex-row">
            <div>
              {" "}
              Copyright © 2023{" "}
              <Link
                href="/"
                className="text-primary transition hover:text-secondary inline-block hover:scale-110 duration-200 "
              >
                Liqueous
              </Link>
            </div>
            <div>
            {" "}
              Need help?{" "}
              <Link
                href="/contact-us"
                className="text-secondary transition hover:text-primary inline-block hover:scale-110 duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
