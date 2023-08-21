'use client'

import Link from "next/link";
import React, { useEffect } from "react";
import { CSSProperties } from "react";
import MainForm from "./MainForm";
import AOS from "aos";
const MainContent = () => {
   useEffect(() => {
    // Initialize AOS once the app is mounted
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });
  }, []);

  const boxShadowStyle: CSSProperties = {
    boxShadow: "-20px 30px 70px rgba(219, 222, 225, 0.4)",
  };
  return (
    <div>
      <section className="bg-[url(/assets/images/service-bg.png)] bg-cover bg-center bg-no-repeat py-14 dark:bg-none lg:py-[100px]">
        <div className="container">
          <div className="heading text-center">
            <h4>
              Bespoke <span className="text-primary">Liquidity Experts</span>
            </h4>
            <p>Review our range of liquidity options:</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <div data-aos="fade-up" data-aos-duration="1000">
              <div
                className="h-full overflow-hidden group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                style={boxShadowStyle}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.09091 1.27273C5.09091 0.572727 4.51818 0 3.81818 0C3.11818 0 2.54545 0.572727 2.54545 1.27273V6.36364H0V14H7.63636V6.36364H5.09091V1.27273ZM10.1818 19.0909C10.1818 20.7455 11.2509 22.1455 12.7273 22.68V28H15.2727V22.68C16.7491 22.1582 17.8182 20.7582 17.8182 19.0909V16.5455H10.1818V19.0909ZM0 19.0909C0 20.7455 1.06909 22.1455 2.54545 22.68V28H5.09091V22.68C6.56727 22.1455 7.63636 20.7455 7.63636 19.0909V16.5455H0V19.0909ZM25.4545 6.36364V1.27273C25.4545 0.572727 24.8818 0 24.1818 0C23.4818 0 22.9091 0.572727 22.9091 1.27273V6.36364H20.3636V14H28V6.36364H25.4545ZM15.2727 1.27273C15.2727 0.572727 14.7 0 14 0C13.3 0 12.7273 0.572727 12.7273 1.27273V6.36364H10.1818V14H17.8182V6.36364H15.2727V1.27273ZM20.3636 19.0909C20.3636 20.7455 21.4327 22.1455 22.9091 22.68V28H25.4545V22.68C26.9309 22.1582 28 20.7582 28 19.0909V16.5455H20.3636V19.0909Z"
                    fill="#5C96FD"
                  />
                </svg>

                <div>
                  {" "}
                  <Link
                    href="/borro-liqueous"
                    className=" my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black hover:scale-110 hover:text-secondary duration-200"
                  >
                    BORRO
                    <br />
                    by Liqueous&trade;
                  </Link>
                </div>

                <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
                  6 month - 10 year liquidity solution designed to access
                  liquidity in non-marginable securities while maintaining
                  beneficial ownership during the term period.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div
                className="h-full overflow-hidden group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                style={boxShadowStyle}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.8889 0H3.11111C1.4 0 0 1.4 0 3.11111V24.8889C0 26.6 1.4 28 3.11111 28H24.8889C26.6 28 28 26.6 28 24.8889V3.11111C28 1.4 26.6 0 24.8889 0ZM9.33333 21.7778H6.22222V10.8889H9.33333V21.7778ZM15.5556 21.7778H12.4444V6.22222H15.5556V21.7778ZM21.7778 21.7778H18.6667V15.5556H21.7778V21.7778Z"
                    fill="#5C96FD"
                  />
                </svg>
                <div>
                  {" "}
                  <Link
                    href="/private-block"
                    className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black hover:scale-110 hover:text-secondary duration-200"
                  >
                    Private
                    <br />
                    Block Purchase
                  </Link>
                </div>

                <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
                  Safeguard your core position with our private block purchase
                  service designed to mitigate information leakage while
                  providing instant liquidity.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div
                className="h-full overflow-hidden group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                style={boxShadowStyle}
              >
                <svg
                  width="21"
                  height="28"
                  viewBox="0 0 21 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.375 9.33333H17.0625V6.66667C17.0625 2.98667 14.1225 0 10.5 0C6.8775 0 3.9375 2.98667 3.9375 6.66667V9.33333H2.625C1.18125 9.33333 0 10.5333 0 12V25.3333C0 26.8 1.18125 28 2.625 28H18.375C19.8188 28 21 26.8 21 25.3333V12C21 10.5333 19.8188 9.33333 18.375 9.33333ZM10.5 21.3333C9.05625 21.3333 7.875 20.1333 7.875 18.6667C7.875 17.2 9.05625 16 10.5 16C11.9438 16 13.125 17.2 13.125 18.6667C13.125 20.1333 11.9438 21.3333 10.5 21.3333ZM14.5688 9.33333H6.43125V6.66667C6.43125 4.38667 8.25562 2.53333 10.5 2.53333C12.7444 2.53333 14.5688 4.38667 14.5688 6.66667V9.33333Z"
                    fill="#5C96FD"
                  />
                </svg>
                <div>
                  <Link
                    href="/equity-lines"
                    className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black hover:scale-110 hover:text-secondary duration-200"
                  >
                    Equity Lines
                    <br /> of Credit
                  </Link>
                </div>

                <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
                  Our fund offers bespoke equity lines of credit expertly
                  crafted to finance publicly traded companies through
                  registration statements.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div
                className="h-full overflow-hidden group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                style={boxShadowStyle}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6 10.024V0C5.6 0.7 0 6.706 0 14C0 21.294 5.6 27.3 12.6 28V17.976C11.2 17.402 9.8 15.848 9.8 14C9.8 12.152 11.2 10.598 12.6 10.024ZM18.004 12.6H28C27.328 5.95 22.4 0.658 15.4 0V10.024C16.8 10.444 17.528 11.396 18.004 12.6ZM15.4 17.976V28C22.4 27.342 27.328 22.05 28 15.4H18.004C17.528 16.604 16.8 17.556 15.4 17.976Z"
                    fill="#5C96FD"
                  />
                </svg>
                <div>
                  <Link
                    href="/financial-solution"
                    className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black hover:scale-110 hover:text-secondary duration-200"
                  >
                    Comprehensive
                    <br />
                    Financial Solutions
                  </Link>
                </div>

                <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
                  Embrace the full spectrum of financial possibilities with our
                  diverse range of tailored solutions - From venture debt and
                  equity investments to toxic debt refinancing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-white/[55%] to-transparent py-14 dark:from-white/5 lg:pb-[100px]">
        <div className="container">
          <div className="heading text-center">
            <svg
              width="41"
              height="25"
              viewBox="0 0 41 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.0418 0.5L32.6287 5.08L22.8541 14.84L14.8421 6.84L0 21.68L2.82421 24.5L14.8421 12.5L22.8541 20.5L35.4729 7.92L40.0597 12.5V0.5H28.0418Z"
                fill="#6C4FFE"
              />
            </svg>

            <h4>
              <span className="text-primary">Flexible</span> Terms and{" "}
            </h4>
            <h4>
              <span className="text-secondary">Individualized</span> Service
            </h4>
            <p>Making asset-backed liquidity work for you, not against you.</p>
          </div>
          <div className="grid items-center gap-8 md:grid-cols-1 lg:grid-cols-2 xl:items-start">
            <div className="order-2 md:order-2 md:col-span-2 lg:col-auto">
              <div className="text-center font-semibold ltr:md:text-left rtl:md:text-right">
                <p className="text-2xl leading-7 pb-5 text-black dark:text-white">
                  Our terms range{" "}
                  <span className="text-primary">
                    between 6 months to 10 years.
                  </span>{" "}
                  We’re committed to giving our clients
                  <span className="text-secondary">
                    {" "}
                    the most flexible structures
                  </span>
                  on the street.
                </p>
                <p className="pb-5">
                  Our rates are highly competitive compared to conventional
                  margin or bank loans. In addition, we have various interest
                  payment options.
                </p>
                <p>
                  All of our terms are determined by our proprietary system
                  (Liqueous IQ) LIQ examines various metrics surrounding the
                  publicly listed company including a quantitative analysis on
                  it’s peer group to identify correlation opportunities that can
                  be utilized to hedge the portfolio.
                </p>

                <Link href="/contact-us">
                  {" "}
                  <button
                    type="button"
                    className="btn mt-10 py-5 px-9 text-white rounded-full"
                  >
                    Contact Us
                  </button>
                </Link>
                <div className="rotate-180">
                  <svg
                    width="41"
                    height="25"
                    viewBox="0 0 41 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.0418 0.5L32.6287 5.08L22.8541 14.84L14.8421 6.84L0 21.68L2.82421 24.5L14.8421 12.5L22.8541 20.5L35.4729 7.92L40.0597 12.5V0.5H28.0418Z"
                      fill="#6C4FFE"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className=" flex justify-center w-full  h-full relative ">
              <div className=" bg-gradient-to-r from-[#dbeafe]  lg:h-full h-[25rem] lg:w-3/4 md:w-3/4 w-11/12 relative border-[12px] rounded-lg border-[#e0e7ff]"></div>

              <div className=" absolute top-0 left-5 z-10   w-full   ">
                <div className="">
                  <div className="w-full flex justify-end">
                    <div className=" h-18  lg:w-3/4 md:w-3/4 w-11/12 flex justify-center ">
                      <div className=" h-16  lg:w-10/12 md:w-3/4 w-full mt-6 ">
                        <div className="  lg:p-3 md:p-4 p-1 bg-[#fcfcfd] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between">
                          <div className="flex items-center rounded-md shadow-xl font-semibold">
                            <h5 className="px-6 text-secondary">FEES</h5>
                          </div>
                          <div className="text-left ml-2">
                            <h5 className=" lg:text-base text-base  tracking-tight text-black dark:text-white">
                              Competitive Interest Rates
                            </h5>
                            <p className="text-xs">
                              Highly competitive as compared to conventional
                              margin or bank loans
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between h-36 mt-10 ">
                    <div className="lg:h-32 w-24 lg:w-32">
                      <img src="/assets/images/Graphic.svg" />
                    </div>
                    <div className=" h-40 w-2/3 flex lg:justify-end justify-center  items-center">
                      <div className=" h-24 p-2 bg-[#fcfcfd] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center">
                        <div className="w-2/3  font-semibold text-left">
                          <h5 className=" text-secondary text-xs">
                            Payments Completed
                          </h5>
                          <p>56/72</p>
                        </div>
                        <div className="w-2/3">
                          <svg
                            width="114"
                            height="54"
                            viewBox="0 0 114 54"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 27.6582C0 27.1059 0.447715 26.6582 1 26.6582H3C3.55228 26.6582 4 27.1059 4 27.6582V54H0V27.6582Z"
                              fill="#EBEAED"
                            />
                            <path
                              d="M0 49.8572C0 49.3049 0.447715 48.8572 1 48.8572H3C3.55228 48.8572 4 49.3049 4 49.8572V54H0V49.8572Z"
                              fill="#5542F6"
                            />
                            <path
                              d="M10 16.7649C10 16.2126 10.4477 15.7649 11 15.7649H13C13.5523 15.7649 14 16.2126 14 16.7649V54H10V16.7649Z"
                              fill="#EBEAED"
                            />
                            <path
                              d="M10 51.5715C10 51.0192 10.4477 50.5715 11 50.5715H13C13.5523 50.5715 14 51.0192 14 51.5715V54.0001H10V51.5715Z"
                              fill="#5542F6"
                            />
                            <path
                              d="M20 1.87891C20 1.32662 20.4477 0.878906 21 0.878906H23C23.5523 0.878906 24 1.32662 24 1.87891V54.0001H20V1.87891Z"
                              fill="#EBEAED"
                            />
                            <path
                              d="M20 44.7146C20 44.1623 20.4477 43.7146 21 43.7146H23C23.5523 43.7146 24 44.1623 24 44.7146V54.0003H20V44.7146Z"
                              fill="#5542F6"
                            />
                            <path
                              d="M30 7.34717C30 6.79488 30.4477 6.34717 31 6.34717H33C33.5523 6.34717 34 6.79488 34 7.34717V54H30V7.34717Z"
                              fill="#EBEAED"
                            />
                            <path
                              d="M30 29.2856C30 28.7334 30.4477 28.2856 31 28.2856H33C33.5523 28.2856 34 28.7334 34 29.2856V53.9999H30V29.2856Z"
                              fill="#EBEAED"
                            />
                            <path
                              d="M40 3.48462C40 2.93233 40.4477 2.48462 41 2.48462H43C43.5523 2.48462 44 2.93233 44 3.48462V54H40V3.48462Z"
                              fill="#EBEAED"
                            />
                            <path
                              d="M40 26.7144C40 26.1621 40.4477 25.7144 41 25.7144H43C43.5523 25.7144 44 26.1621 44 26.7144V54.0001H40V26.7144Z"
                              fill="#EBEAED"
                            />
                            <path
                              d="M50 9.73413C50 9.18184 50.4477 8.73413 51 8.73413H53C53.5523 8.73413 54 9.18185 54 9.73413V54H50V9.73413Z"
                              fill="#EBEAED"
                            />
                            <path
                              d="M50 47.2856C50 46.7334 50.4477 46.2856 51 46.2856H53C53.5523 46.2856 54 46.7334 54 47.2856V53.9999H50V47.2856Z"
                              fill="#5542F6"
                            />
                            <path
                              d="M60 7.34717C60 6.79488 60.4477 6.34717 61 6.34717H63C63.5523 6.34717 64 6.79488 64 7.34717V54H60V7.34717Z"
                              fill="#EBEAED"
                            />
                            <path
                              d="M60 37C60 36.4477 60.4477 36 61 36H63C63.5523 36 64 36.4477 64 37V54H60V37Z"
                              fill="#5542F6"
                            />
                            <path
                              d="M70 19.0654C70 18.5131 70.4477 18.0654 71 18.0654H73C73.5523 18.0654 74 18.5131 74 19.0654V54.0003H70V19.0654Z"
                              fill="#EBEAED"
                            />
                            <path
                              d="M70 40.4285C70 39.8762 70.4477 39.4285 71 39.4285H73C73.5523 39.4285 74 39.8762 74 40.4285V53.9999H70V40.4285Z"
                              fill="#5542F6"
                            />
                            <path
                              d="M80 14.2366C80 13.6843 80.4477 13.2366 81 13.2366H83C83.5523 13.2366 84 13.6843 84 14.2366V53.8586H80V14.2366Z"
                              fill="#EBEAED"
                            />
                            <path
                              d="M80 32.7144C80 32.1621 80.4477 31.7144 81 31.7144H83C83.5523 31.7144 84 32.1621 84 32.7144V54.0001H80V32.7144Z"
                              fill="#5542F6"
                            />
                            <path
                              d="M90 0.999999C90 0.447715 90.4477 0 91 0H93C93.5523 0 94 0.447715 94 1V54H90V0.999999Z"
                              fill="#EBEAED"
                            />
                            <path
                              d="M90 42.1091C90 41.5568 90.4477 41.1091 91 41.1091H93C93.5523 41.1091 94 41.5568 94 42.1091V53.9999H90V42.1091Z"
                              fill="#5542F6"
                            />
                            <path
                              d="M100 1.85718C100 1.3049 100.448 0.857178 101 0.857178H103C103.552 0.857178 104 1.30489 104 1.85718V54H100V1.85718Z"
                              fill="#EBEAED"
                            />
                            <path
                              d="M100 47.2856C100 46.7334 100.448 46.2856 101 46.2856H103C103.552 46.2856 104 46.7334 104 47.2856V53.9999H100V47.2856Z"
                              fill="#5542F6"
                            />
                            <path
                              d="M110 15.9407C110 15.3884 110.448 14.9407 111 14.9407H113C113.552 14.9407 114 15.3884 114 15.9407V54.0004H110V15.9407Z"
                              fill="#EBEAED"
                            />
                            <path
                              d="M110 42.1428C110 41.5905 110.448 41.1428 111 41.1428H113C113.552 41.1428 114 41.5905 114 42.1428V54H110V42.1428Z"
                              fill="#EBEAED"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" lg:mt-0 mt-0 w-3/4 flex justify-center  ">
                    <div className=" h-24 lg:w-2/3 md:w-1/2 w-10/12 p-2 bg-[#fcfcfd] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                      <div className=" font-semibold text-left">
                        <h5 className=" text-secondary text-xs">BORRO</h5>
                      </div>
                      <div className="flex justify-between">
                        <div className="w-1/2 text-left ">
                          <p>$25,000</p>
                        </div>
                        <div className="w-1/2 ">
                          <p>$$$</p>
                        </div>
                      </div>
                      <div className="pt-4 ">
                        <svg
                          width="210"
                          height="5"
                          viewBox="0 0 210 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 1C0 0.447715 0.447715 0 1 0H214C214.552 0 215 0.447715 215 1V4C215 4.55228 214.552 5 214 5H1.00001C0.447721 5 0 4.55228 0 4V1Z"
                            fill="#EBEAED"
                          />
                          <path
                            d="M0 1C0 0.447715 0.447715 0 1 0H153.531C154.084 0 154.531 0.447715 154.531 1V4C154.531 4.55228 154.084 5 153.531 5H0.999996C0.447711 5 0 4.55228 0 4V1Z"
                            fill="#5542F6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="heading text-center mb-0">
            <div className="flex justify-center">
              <svg
                width="41"
                height="25"
                viewBox="0 0 41 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.0418 0.5L32.6287 5.08L22.8541 14.84L14.8421 6.84L0 21.68L2.82421 24.5L14.8421 12.5L22.8541 20.5L35.4729 7.92L40.0597 12.5V0.5H28.0418Z"
                  fill="#6C4FFE"
                />
              </svg>
            </div>
            <h4>
              Our <span className="text-primary">Services</span>
            </h4>
            <p>Review our range of liquidity options:</p>
          </div>
        </div>
        <div className="relative container  ">
          <div className="relative ">
            <div className="container   flex justify-center lg:mb-[100px] mt-[50px]">
              <div className="lg:h-[20rem] h-[36rem] lg:w-[64rem] w-full bg-[#eff6ff] rounded-xl flex justify-center items-center  dark:border-2 dark:border-gray dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none  "></div>
            </div>
          </div>

          <div className=" container absolute top-0 left-0 z-10 flex justify-center pt-8">
            <div className="lg:h-[16rem] h-[32rem] lg:w-[60rem] rounded-xl bg-white flex justify-center items-center w-full dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none   ">
              <div className="w-10/12  ">
                <div className="lg:flex justify-between ">
                  <div className=" lg:w-[21rem] ">
                    <Link
                      href="/borro-liqueous"
                      className=" hover:scale-110 duration-200"
                    >
                      <div className="p-2 bg-[#fcfcfd] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between  hover:scale-110 duration-200">
                        <div className="flex ">
                          <svg
                            className="w-10 h-10 my-1 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 48 49"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M36 0.5H12C5.37258 0.5 0 5.87258 0 12.5V36.5C0 43.1274 5.37258 48.5 12 48.5H36C42.6274 48.5 48 43.1274 48 36.5V12.5C48 5.87258 42.6274 0.5 36 0.5Z"
                              fill="#5C96FD"
                            />
                            <path
                              d="M15.091 11.773C15.0817 11.4417 14.9436 11.1271 14.7059 10.896C14.4683 10.665 14.1499 10.5357 13.8185 10.5357C13.4871 10.5357 13.1687 10.665 12.9311 10.896C12.6934 11.1271 12.5553 11.4417 12.546 11.773V16.864H10V24.5H17.636V16.864H15.091V11.773ZM20.182 29.591C20.1861 30.3783 20.4325 31.1451 20.8879 31.7873C21.3433 32.4295 21.9854 32.9158 22.727 33.18V38.5H25.272V33.18C26.0156 32.9189 26.6598 32.4334 27.1157 31.7905C27.5715 31.1477 27.8166 30.3791 27.817 29.591V27.045H20.182V29.591ZM10 29.591C10.0041 30.3783 10.2505 31.1451 10.7059 31.7873C11.1613 32.4295 11.8034 32.9158 12.545 33.18V38.5H15.091V33.18C15.8326 32.9158 16.4747 32.4295 16.9301 31.7873C17.3855 31.1451 17.6319 30.3783 17.636 29.591V27.045H10V29.591ZM35.455 16.864V11.773C35.4598 11.6029 35.4304 11.4336 35.3686 11.275C35.3068 11.1165 35.2138 10.9719 35.0952 10.8499C34.9765 10.7279 34.8346 10.6309 34.6779 10.5647C34.5211 10.4985 34.3527 10.4644 34.1825 10.4644C34.0123 10.4644 33.8439 10.4985 33.6871 10.5647C33.5304 10.6309 33.3885 10.7279 33.2698 10.8499C33.1512 10.9719 33.0582 11.1165 32.9964 11.275C32.9346 11.4336 32.9052 11.6029 32.91 11.773V16.864H30.364V24.5H38V16.864H35.455ZM25.273 11.773C25.2637 11.4417 25.1256 11.1271 24.8879 10.896C24.6503 10.665 24.3319 10.5357 24.0005 10.5357C23.6691 10.5357 23.3507 10.665 23.1131 10.896C22.8754 11.1271 22.7373 11.4417 22.728 11.773V16.864H20.182V24.5H27.818V16.864H25.273V11.773ZM30.364 29.591C30.3681 30.3783 30.6145 31.1451 31.0699 31.7873C31.5253 32.4295 32.1674 32.9158 32.909 33.18V38.5H35.454V33.18C36.1978 32.9191 36.8422 32.4337 37.2982 31.7908C37.7543 31.1479 37.9995 30.3793 38 29.591V27.045H30.364V29.591Z"
                              fill="white"
                            />
                          </svg>
                          <div className=" flex items-center ml-2">
                            <h5 className=" lg:text-xl text-lg font-semibold tracking-tight text-black dark:text-white ">
                              BORRO by Liqueous
                            </h5>
                          </div>
                        </div>

                        <div className="flex items-center ml-8">
                          <svg
                            width="8"
                            height="13"
                            viewBox="0 0 8 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.390032 2.77601L4.11403 6.50001L0.390032 10.224C0.140066 10.4741 -0.000311852 10.8133 -0.000217915 11.1669C-0.000123978 11.5205 0.140433 11.8595 0.390532 12.1095C0.640631 12.3595 0.979785 12.4998 1.33339 12.4998C1.68699 12.4997 2.02607 12.3591 2.27603 12.109L6.94203 7.44301C7.06594 7.31921 7.16424 7.17221 7.2313 7.0104C7.29837 6.8486 7.33289 6.67516 7.33289 6.50001C7.33289 6.32485 7.29837 6.15142 7.2313 5.98961C7.16424 5.8278 7.06594 5.6808 6.94203 5.55701L2.27503 0.890006C2.02493 0.640039 1.68578 0.499662 1.33218 0.499756C0.978579 0.499849 0.639499 0.640407 0.389532 0.890506C0.139565 1.1406 -0.000811577 1.47976 -0.00071764 1.83336C-0.000623703 2.18696 0.139933 2.52604 0.390032 2.77601Z"
                              fill="#777E90"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                    <Link href="/equity-lines">
                      <div className="p-2 bg-[#fcfcfd] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between mt-8  hover:scale-110 duration-200">
                        <div className="flex">
                          <svg
                            className="w-10 h-10 my-1 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 48 49"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M36 0.5H12C5.37258 0.5 0 5.87258 0 12.5V36.5C0 43.1274 5.37258 48.5 12 48.5H36C42.6274 48.5 48 43.1274 48 36.5V12.5C48 5.87258 42.6274 0.5 36 0.5Z"
                              fill="#5C96FD"
                            />
                            <path
                              d="M0.397949 22.568L9.84895 13.104L14.8889 18.144L23.8239 8.10202L25.5979 9.87802L14.8889 21.925L9.84895 16.885L2.28795 24.458L0.397949 22.568ZM2.28795 16.897L9.84895 9.32402L14.8889 14.364L25.5979 2.31802L23.8239 0.541016L14.8889 10.584L9.84895 5.54102L0.397949 15.007L2.28795 16.897Z"
                              fill="white"
                            />
                          </svg>
                          <div className=" flex items-center ml-2">
                            <h5 className=" lg:text-xl text-lg font-semibold tracking-tight text-black dark:text-white">
                              Equity Lines of Credit
                            </h5>
                          </div>
                        </div>
                        <div className="flex items-center ml-8">
                          <svg
                            width="8"
                            height="13"
                            viewBox="0 0 8 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.390032 2.77601L4.11403 6.50001L0.390032 10.224C0.140066 10.4741 -0.000311852 10.8133 -0.000217915 11.1669C-0.000123978 11.5205 0.140433 11.8595 0.390532 12.1095C0.640631 12.3595 0.979785 12.4998 1.33339 12.4998C1.68699 12.4997 2.02607 12.3591 2.27603 12.109L6.94203 7.44301C7.06594 7.31921 7.16424 7.17221 7.2313 7.0104C7.29837 6.8486 7.33289 6.67516 7.33289 6.50001C7.33289 6.32485 7.29837 6.15142 7.2313 5.98961C7.16424 5.8278 7.06594 5.6808 6.94203 5.55701L2.27503 0.890006C2.02493 0.640039 1.68578 0.499662 1.33218 0.499756C0.978579 0.499849 0.639499 0.640407 0.389532 0.890506C0.139565 1.1406 -0.000811577 1.47976 -0.00071764 1.83336C-0.000623703 2.18696 0.139933 2.52604 0.390032 2.77601Z"
                              fill="#777E90"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className=" lg:w-[27rem] ">
                    <Link href="/private-block">
                      <div className="p-2 bg-[#fcfcfd] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between mt-8 lg:mt-0  hover:scale-110 duration-200">
                        <div className="flex">
                          <svg
                            className="w-10 h-10 my-1 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 48 49"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M36 0.5H12C5.37258 0.5 0 5.87258 0 12.5V36.5C0 43.1274 5.37258 48.5 12 48.5H36C42.6274 48.5 48 43.1274 48 36.5V12.5C48 5.87258 42.6274 0.5 36 0.5Z"
                              fill="#5C96FD"
                            />
                            <path
                              d="M32.375 19.833H31.063V17.167C31.0761 15.4128 30.3921 13.7252 29.1615 12.4751C27.9308 11.2249 26.2542 10.5145 24.5 10.5C22.746 10.5148 21.0696 11.2253 19.8392 12.4754C18.6088 13.7255 17.925 15.413 17.938 17.167V19.833H16.625C15.9239 19.8407 15.2543 20.1254 14.7625 20.6251C14.2707 21.1248 13.9966 21.7989 14 22.5V35.833C13.9966 36.5341 14.2707 37.2082 14.7625 37.7079C15.2543 38.2076 15.9239 38.4923 16.625 38.5H32.375C33.0761 38.4923 33.7457 38.2076 34.2376 37.7079C34.7294 37.2082 35.0035 36.5341 35 35.833V22.5C35.0035 21.7989 34.7294 21.1248 34.2376 20.6251C33.7457 20.1254 33.0761 19.8407 32.375 19.833ZM24.5 31.833C23.9708 31.8413 23.4511 31.692 23.0071 31.4041C22.563 31.1161 22.2146 30.7026 22.0063 30.2161C21.798 29.7295 21.7391 29.192 21.8373 28.6719C21.9354 28.1518 22.186 27.6727 22.5573 27.2955C22.9285 26.9183 23.4036 26.6601 23.9221 26.5537C24.4405 26.4474 24.9789 26.4977 25.4687 26.6983C25.9585 26.8988 26.3775 27.2406 26.6725 27.68C26.9674 28.1195 27.125 28.6367 27.125 29.166C27.1285 29.8671 26.8544 30.5412 26.3626 31.0409C25.8707 31.5406 25.2011 31.8253 24.5 31.833ZM28.569 19.833H20.431V17.167C20.431 16.6327 20.5363 16.1035 20.7408 15.6099C20.9453 15.1162 21.245 14.6676 21.6228 14.2898C22.0007 13.9119 22.4492 13.6122 22.9429 13.4077C23.4366 13.2032 23.9657 13.098 24.5 13.098C25.0344 13.098 25.5635 13.2032 26.0572 13.4077C26.5508 13.6122 26.9994 13.9119 27.3772 14.2898C27.7551 14.6676 28.0548 15.1162 28.2593 15.6099C28.4638 16.1035 28.569 16.6327 28.569 17.167V19.833Z"
                              fill="white"
                            />
                          </svg>
                          <div className=" flex items-center ml-2">
                            <h5 className=" lg:text-xl text-lg font-semibold tracking-tight text-black dark:text-white">
                              Private Block Purchase
                            </h5>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <svg
                            width="8"
                            height="13"
                            viewBox="0 0 8 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.390032 2.77601L4.11403 6.50001L0.390032 10.224C0.140066 10.4741 -0.000311852 10.8133 -0.000217915 11.1669C-0.000123978 11.5205 0.140433 11.8595 0.390532 12.1095C0.640631 12.3595 0.979785 12.4998 1.33339 12.4998C1.68699 12.4997 2.02607 12.3591 2.27603 12.109L6.94203 7.44301C7.06594 7.31921 7.16424 7.17221 7.2313 7.0104C7.29837 6.8486 7.33289 6.67516 7.33289 6.50001C7.33289 6.32485 7.29837 6.15142 7.2313 5.98961C7.16424 5.8278 7.06594 5.6808 6.94203 5.55701L2.27503 0.890006C2.02493 0.640039 1.68578 0.499662 1.33218 0.499756C0.978579 0.499849 0.639499 0.640407 0.389532 0.890506C0.139565 1.1406 -0.000811577 1.47976 -0.00071764 1.83336C-0.000623703 2.18696 0.139933 2.52604 0.390032 2.77601Z"
                              fill="#777E90"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                    <Link href="/financial-solution">
                      <div className="p-2 bg-[#fcfcfd] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between  mt-8  hover:scale-110 duration-200">
                        <div className="flex">
                          <svg
                            className="w-10 h-10 my-1 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 48 49"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 0.5H36C39.1826 0.5 42.2348 1.76428 44.4853 4.01472C46.7357 6.26515 48 9.3174 48 12.5V36.5C48 39.6826 46.7357 42.7348 44.4853 44.9853C42.2348 47.2357 39.1826 48.5 36 48.5H12C8.8174 48.5 5.76515 47.2357 3.51472 44.9853C1.26428 42.7348 0 39.6826 0 36.5L0 12.5C0 9.3174 1.26428 6.26515 3.51472 4.01472C5.76515 1.76428 8.8174 0.5 12 0.5Z"
                              fill="#5C96FD"
                            />
                            <path
                              d="M22.6001 20.524V10.5C19.1418 10.8656 15.9413 12.4981 13.6152 15.0831C11.289 17.6681 10.002 21.0225 10.002 24.5C10.002 27.9775 11.289 31.3319 13.6152 33.9169C15.9413 36.5019 19.1418 38.1344 22.6001 38.5V28.476C21.8047 28.1465 21.1193 27.5979 20.6236 26.894C20.1279 26.1901 19.8423 25.3599 19.8001 24.5C19.8423 23.6401 20.1279 22.8099 20.6236 22.106C21.1193 21.4021 21.8047 20.8535 22.6001 20.524ZM28.0001 23.1H38.0001C37.7313 19.8481 36.3175 16.7971 34.0102 14.4898C31.703 12.1826 28.6519 10.7688 25.4001 10.5V20.524C26.0099 20.7102 26.5654 21.042 27.0183 21.4908C27.4713 21.9396 27.8083 22.4919 28.0001 23.1ZM25.4001 28.476V38.5C28.6519 38.2312 31.703 36.8174 34.0102 34.5102C36.3175 32.2029 37.7313 29.1519 38.0001 25.9H28.0001C27.8083 26.5081 27.4713 27.0604 27.0183 27.5092C26.5654 27.958 26.0099 28.2898 25.4001 28.476Z"
                              fill="white"
                            />
                          </svg>
                          <div className=" flex items-center ml-2">
                            <h5 className=" lg:text-xl text-lg font-semibold tracking-tight text-black dark:text-white">
                              Comprehensive Financial Solutions
                            </h5>
                          </div>
                        </div>

                        <div className="flex items-center ml-4">
                          <svg
                            width="8"
                            height="13"
                            viewBox="0 0 8 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.390032 2.77601L4.11403 6.50001L0.390032 10.224C0.140066 10.4741 -0.000311852 10.8133 -0.000217915 11.1669C-0.000123978 11.5205 0.140433 11.8595 0.390532 12.1095C0.640631 12.3595 0.979785 12.4998 1.33339 12.4998C1.68699 12.4997 2.02607 12.3591 2.27603 12.109L6.94203 7.44301C7.06594 7.31921 7.16424 7.17221 7.2313 7.0104C7.29837 6.8486 7.33289 6.67516 7.33289 6.50001C7.33289 6.32485 7.29837 6.15142 7.2313 5.98961C7.16424 5.8278 7.06594 5.6808 6.94203 5.55701L2.27503 0.890006C2.02493 0.640039 1.68578 0.499662 1.33218 0.499756C0.978579 0.499849 0.639499 0.640407 0.389532 0.890506C0.139565 1.1406 -0.000811577 1.47976 -0.00071764 1.83336C-0.000623703 2.18696 0.139933 2.52604 0.390032 2.77601Z"
                              fill="#777E90"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-10 lg:px-10 px-0 dark:bg-transparent mt-[50px] lg:mt-0 ">
        <div className="container lg:flex justify-between items-center ">
            <div
                className="text-2xl font-extrabold text-black dark:text-white sm:text-4xl lg:text-[40px] lg:!leading-[50px] text-left sm:mb-6 flex justify-center ">
                <div>
                    <h4><span className="text-white">Get Started Simple </span></h4>
                    <h4><span className="text-white flex justify-center lg:justify-start ">& Securely</span></h4>
                </div>
            </div>
            <div className=" flex justify-center lg:block">
                <div
                    className="block max-w-lg lg:p-10 p-6 lg:mt-0 mt-4 bg-white border border-gray-200 rounded-2xl shadow hover:border-secondary  dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary dark:hover:text-black">

                    <p className="font-normal text-gray-700 dark:text-gray-400"> At<span className="text-primary">
                            Liqueous</span>, we believe in empowering our
                        clients with the financial flexibility they need to
                        achieve their goals. Whether you’re looking to invest in a new business venture, purchase a
                        property, or cover unexpected expenses, our securities-backed loans can help you get the funds
                        you need, fast.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Formm Section */}
        <MainForm />
    <section className="bg-white/50 py-14 dark:bg-transparent lg:py-[100px]">
        <div className="container">
            <div className="heading text-center">
                <h4>Stock Exchanges <span className="text-primary">We Work With</span></h4>
                <p>Liqueous is proud to announce that we work alongside many stock exchanges located throughout the
                    globe.

                </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-3">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <a>
                     
                        <div
                            className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px]">
                            <svg width="206" height="88" viewBox="0 0 206 88" fill="none"
                                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect opacity="0.5" width="206" height="88" fill="url(#pattern0)" />
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_1_58"
                                            transform="matrix(0.00714286 0 0 0.0167208 0 -0.00162338)" />
                                    </pattern>
                                    <image id="image0_1_58" width="140" height="60"
                                        xlinkHref="data:image/png;base64,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" />
                                </defs>
                            </svg>
                        </div>
                    </a>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <a>
                      
                        <div
                            className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px]">
                            <svg width="206" height="88" viewBox="0 0 206 88" fill="none"
                                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect opacity="0.5" width="206" height="88" fill="url(#pattern1)" />
                                <defs>
                                    <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_1_60"
                                            transform="matrix(0.00714286 0 0 0.0167208 0 -0.00162338)" />
                                    </pattern>
                                    <image id="image0_1_60" width="140" height="60"
                                        xlinkHref="data:image/png;base64,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" />
                                </defs>
                            </svg>
                        </div>
                    </a>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <a>
                     
                        <div
                            className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px]">
                            <svg width="228" height="98" viewBox="0 0 228 98" fill="none"
                                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect opacity="0.5" width="228" height="98" fill="url(#pattern2)" />
                                <defs>
                                    <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_1_59"
                                            transform="matrix(0.00716374 0 0 0.0166667 -0.00146199 0)" />
                                    </pattern>
                                    <image id="image0_1_59" width="140" height="60"
                                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAA8CAMAAACD1KJ5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAwBQTFRFAAAAhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvNRMnRQAAAQB0Uk5TAE6yysm+LybA4QkLHWm9yHIDAWAobNDjqSMMAkpFaytNy6WGSQQuImMZVbaT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" />
                                </defs>
                            </svg>
                        </div>
                    </a>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <a>
                       
                        <div
                            className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px]">
                            <svg width="206" height="88" viewBox="0 0 206 88" fill="none"
                                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect opacity="0.5" width="206" height="88" fill="url(#pattern3)" />
                                <defs>
                                    <pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_1_63"
                                            transform="matrix(0.00714286 0 0 0.0167208 0 -0.00162338)" />
                                    </pattern>
                                    <image id="image0_1_63" width="140" height="60"
                                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAA8CAMAAACD1KJ5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAGxQTFRFAAAAhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvMduURwAAACR0Uk5TAHGqOf9VDLbGHKNF7yX6UPzPjhdSauMyuQ5cg7xOIMrOJHKAG314owAAAW1JREFUeJztltt6gyAMgJWQDbtDO9a587rD+7/j0BIIiu2+KV7lvwo0yl8gYFUJgiAIgiAIgsCplVJADXANNYj6jDpEEfBdwF9Hqf9Daa2RGugaehD1GSpEEQxdyB9XJWUuLs/KaNO4sNno4jJX1+dltHGh0cVlbtgAiczttuuqd6TmXXTBPYN3XQAx16Jne9/37fGBGbaIoxEWk7FhEUa5EWhJZc6snJWB4xiQy2XUC6xQGMDQ0WFSGf+XIZu7eYwv8TJzXQYVksqwqsnksjl6Wk3GTOQyGVxNJl2mrIxdRabfRP35Ospt2Z3En5wrE84OO5CxjeFzkOQyl2cvs0g1TZV2TeNAJjfS0OFrYPzjYjIhUJncQE0ubunmXEx/kKle4rZJ9sxu33UBNV/ffPBeUoZtm+lb2zVIq+gnhJ+a0zK2CvVdVub4oaJOyFDtmxVkPg4u/vzKynzr9gfpHGoQ21kygiAIgiAIgrAAvyyWE0MAecwVAAAAAElFTkSuQmCC" />
                                </defs>
                            </svg>
                        </div>
                    </a>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <a>
                       
                        <div
                            className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px]">
                            <svg width="206" height="88" viewBox="0 0 206 88" fill="none"
                                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect opacity="0.5" width="206" height="88" fill="url(#pattern4)" />
                                <defs>
                                    <pattern id="pattern4" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_1_62"
                                            transform="matrix(0.00714286 0 0 0.0167208 0 -0.00162338)" />
                                    </pattern>
                                    <image id="image0_1_62" width="140" height="60"
                                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAA8CAMAAACD1KJ5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAe9QTFRFAAAAhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvabEGNgAAAKV0Uk5TADqJPAQbdz1N//q9QQ1y5lRM8VcOrFVL/poGMtJWSvttAc9J81wQtllI2338WkdbRl1FRENCQD8kNDY4PmqBTlAHzJunrqIFFspreQKkJ4XLcfijncVY9vTXGCzr8Geh8ug5oO/t35+mzSOetSuSuenOnHBR+YwDNZn3M9CYDJdf0ZZpqZSRjo2Ih4SAgm9zeHyDdWxutBnUuhEcsSbaF+QivwoIjBJbqgAAAqxJREFUeJzt2OlX00AQAPClhdqNrQcoBjxoENRC1SpYQEAUpGIBpaVWPBDBoiCKCh7FC8WTwyLeB97+oSZNYpKJ4he2E9/rfOlMZl/399JuNgkhmchEOiPLZs/WlTmOJWgUQpyUW+pSC/ey5XQFImYlpTQ3Tz45q1aLRT4iZo04P+ULCsV07TopX4+I2SABaJFHIDnFqTQPEbMxJaAlpZs2y9kWRIxXJtCycp+cbEXEbFMwlFc+t1sBo0YpIsYPMTsQMTuthKmw0s9UaSXMLithXBCDubQDVsJUQUz6rsBCdc3u2ix7XZWrskKOeh/A7HE6nQ17lWgQi8A+VhgbPBGNTQYNv78ZjggeYIQhLblgqoNCiNMqX2tbOxjAHWJlIeQwmKuDkHBELSKtAukEA6LsLMR9xIQhsaNy3hUTi6Cxf+w4Qww5cdKEIeEuKe0+JeU9hnaJnaVF3BpP62drTB3zin+l3r5UekbfjTO/Pe/rNWFIfv9Z5YHpnK7Z7/r7tyxWVA9oy3lQPiTUnleaQ79b/IWL7C2kZZiDGC2iGuZSDXuL/7Lul7gCuyO6JjfK6uqrxtVrdCFMk2E1Xb/B1JIwLu1i2C8wtItGWVrcg3RhzJixf/MWQwzcKW/DAXfAgA6BmeVu978w42AADTDD3INT3YcjJuCInuw/fdFixIOHA53BoZGxiUePnzydnJqeeRYKeZLJ8Oysw/F8bq58RokX01JMTYrx0s0KY4o6eCJCaZvaHKZ7YEthXiFiTI8qHithXiNiTE+USSthmG5G/xPG9BYibCUM5plRXxZF3vD4f2AVE337Dn9pK+/03n8giTj6RU/GlH0U01gcGyO9euXnP0mpkPhMcfcmEeOzFSrFl2Yeddf2fx3+plWC93s9noX8aAMHfqIwMpHW+AUX6ITdwjNi6wAAAABJRU5ErkJggg==" />
                                </defs>
                            </svg>
                        </div>
                    </a>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <a>
                     
                        <div
                            className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px]">
                            <svg width="206" height="88" viewBox="0 0 206 88" fill="none"
                                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect opacity="0.5" width="206" height="88" fill="url(#pattern5)" />
                                <defs>
                                    <pattern id="pattern5" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_1_61"
                                            transform="matrix(0.00714286 0 0 0.0167208 0 -0.00162338)" />
                                    </pattern>
                                    <image id="image0_1_61" width="140" height="60"
                                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAA8CAMAAACD1KJ5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAtNQTFRFAAAAhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSvhZSv47RzUQAAAPF0Uk5TAAEIGig2VXGDjpOXmY1wVjcmEgMYTVIzJU5XWkMEDkRRBxwyIQoVbKne9//404Q9BnbkkQ285VDg6C4Wdd2mPHd5TBN98a8MrfuwKUvmApr6gm7Z/sc6c1Nv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" />
                                </defs>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};

export default MainContent;
