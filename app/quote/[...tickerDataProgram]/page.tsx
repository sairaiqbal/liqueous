import React from "react";
import getTickerDetailById from "@/app/Utils/getTickerDetailById";
// import LoadingError from "./loadingError";
import Link from "next/link";
// import QuoteForm from "./quoteForm";
import ChartForm from "./chartForm";

interface QuoteProps {
  params: {
    tickerDataProgram: string;
  };
}

const Quote: React.FC<QuoteProps> = async ({ params }) => {
  const tickerDetail = await getTickerDetailById(
    params.tickerDataProgram[0],
    params.tickerDataProgram[1]
  );
  //   // console.log("tickerinquote", tickerDetail);
  //   console.log("params", params);
  // console.log(params.tickerDataProgram[0]);
  return (

    <>
    <ChartForm params={tickerDetail}/>
      {/* <div>I am quote page</div> */}
      {/* <div className="lg:flex  w-full bg-gradient-to-t from-white/[55%] to-transparent ">
        <section className=" lg:w-2/3 w-full  py-8 dark:bg-none">
          <div className="heading text-left mt-8 mb-0 flex justify-center">
            <div className="w-[85%]">
              <div>
                <span className="text-primary text-xl uppercase font-bold">
                  Access Your Liquidity Within 7 days through our Proprietary
                  Borro Program
                </span>
                <h4 id="estimate-now"> Get an instant quote today! </h4>
                <p>
                  Tap into your liquidity with our securities-backed loans at
                  the lowest rates on the market. Simply fill out the form, get
                  your quote, and apply to receive your funds in less than a
                  week!
                </p>
              </div>
            </div>
          </div>
          <LoadingError
            params={tickerDetail
              
            }
          />
        </section>
        <QuoteForm/>
      </div> */}
      {/* <PhoneNumberInput/> */}

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
      <section className="bg-primary py-10 lg:px-10 px-0 dark:bg-transparent mt-[50px] lg:mt-0 ">
        <div className="container lg:flex justify-between items-center ">
          <div className="text-2xl font-extrabold text-black dark:text-white sm:text-4xl lg:text-[40px] lg:!leading-[50px] text-left sm:mb-6 flex justify-center ">
            <div>
              <h4>
                <span className="text-white">Get Started Simple </span>
              </h4>
              <h4>
                <span className="text-white flex justify-center lg:justify-start ">
                  & Securely
                </span>
              </h4>
            </div>
          </div>
          <div className=" flex justify-center lg:block">
            <div className="block max-w-lg lg:p-10 p-6 lg:mt-0 mt-4 bg-white border border-gray-200 rounded-2xl shadow hover:border-secondary  dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary dark:hover:text-black">
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {" "}
                At<span className="text-primary">Liqueous</span>, we believe in
                empowering our clients with the financial flexibility they need
                to achieve their goals. Whether you’re looking to invest in a
                new business venture, purchase a property, or cover unexpected
                expenses, our securities-backed loans can help you get the funds
                you need, fast.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-14 bg-white dark:from-white/5 lg:py-[100px]">
        <div className="container ">
          <div className="heading text-center">
            <h4>
              We are Here to <span className="text-primary">Help You </span>
            </h4>

            <p>
              Our mission is to deliver reliable, latest news and opinions.{" "}
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="text-center font-semibold ltr:md:text-left rtl:md:text-right  ">
            <div className=" flex justify-center items-center   h-[14rem] w-[22rem] lg:w-[28rem] bg-[#f3f3fe]  rounded-xl ">
              <div className=" h-[10rem] w-[18rem] lg:w-[24rem] bg-white rounded-xl p-5">
                <div className="flex justify-center items-center">
                  <svg
                    width="34"
                    height="27"
                    viewBox="0 0 34 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.6 1.24412e-09H3.4C2.50416 -2.50359e-06 1.64489 0.355321 1.01068 0.988028C0.376476 1.62073 0.0191185 2.47916 0.017 3.375L0 23.625C0.00659868 24.5224 0.367723 25.3808 1.00463 26.013C1.64154 26.6452 2.50258 27 3.4 27H30.6C31.4974 27 32.3585 26.6452 32.9954 26.013C33.6323 25.3808 33.9934 24.5224 34 23.625V3.375C33.9934 2.4776 33.6323 1.61921 32.9954 0.986982C32.3585 0.354755 31.4974 -2.4259e-05 30.6 1.24412e-09ZM30.6 6.75L17 15.188L3.4 6.75V3.375L17 11.813L30.6 3.375V6.75Z"
                      fill="#5C96FD"
                    />
                  </svg>
                  <p className="mb-3 font-normal text-gray dark:text-gray-400 pl-2 pt-3">
                    info@liqueous.com
                  </p>
                </div>
                <Link href="/contact-us" className="flex justify-center">
                  <button className="  my-3  p-3 block w-fit  bg-white border-2 border-gray/20 text-black font-bold rounded-full dark:bg-primary">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container  flex justify-center">
          <div className="mt-12 mb-8 grid grid-cols-1 gap-8 md:grid-cols-3   mx-4 lg:mx-0">
            <div className="max-w-sm p-6 bg-[#fcfcfd] border border-white rounded-2xl shadow dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none">
              <svg
                width="34"
                height="27"
                viewBox="0 0 34 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.2 0H2.8C2.05982 0.00370093 1.35122 0.300333 0.829145 0.825034C0.307067 1.34974 0.0139907 2.05981 0.014 2.8L0 28L5.6 22.4H25.2C25.942 22.3979 26.6529 22.1022 27.1776 21.5776C27.7022 21.0529 27.9979 20.342 28 19.6V2.8C27.9979 2.05804 27.7022 1.34708 27.1776 0.822433C26.6529 0.297788 25.942 0.00211084 25.2 0ZM5.6 9.8H22.4V12.6H5.6V9.8ZM16.8 16.8H5.6V14H16.8V16.8ZM22.4 8.4H5.6V5.6H22.4V8.4Z"
                  fill="#5C96FD"
                />
              </svg>

              <h5 className="my-3 text-2xl font-semibold tracking-tight text-black dark:text-white">
                Advisory Services
              </h5>

              <p className="mb-3 font-normal text-gray dark:text-gray-400">
                Looking for expert advice or guidance?
                <br />
                Our advisory services are designed to provide you with valuable
                insights and recommendations.{" "}
              </p>
              <a href="https://calendly.com/jacob-n2" target="_blank">
                {" "}
                <button className="  my-3  p-3 block w-fit text-sm  bg-white border-2 border-gray/20 text-black font-bold rounded-full dark:bg-primary">
                  Schedule an advisory meeting today.
                </button>
              </a>
            </div>
            <div className="max-w-sm p-6 bg-[#fcfcfd] border border-white rounded-2xl shadow dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none">
              <svg
                width="34"
                height="27"
                viewBox="0 0 34 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.2 0H2.8C2.05982 0.00370093 1.35122 0.300333 0.829145 0.825034C0.307067 1.34974 0.0139907 2.05981 0.014 2.8L0 28L5.6 22.4H25.2C25.942 22.3979 26.6529 22.1022 27.1776 21.5776C27.7022 21.0529 27.9979 20.342 28 19.6V2.8C27.9979 2.05804 27.7022 1.34708 27.1776 0.822433C26.6529 0.297788 25.942 0.00211084 25.2 0ZM5.6 9.8H22.4V12.6H5.6V9.8ZM16.8 16.8H5.6V14H16.8V16.8ZM22.4 8.4H5.6V5.6H22.4V8.4Z"
                  fill="#5C96FD"
                />
              </svg>

              <h5 className="my-3 text-2xl font-semibold tracking-tight text-black dark:text-white">
                Business Consultation
              </h5>

              <p className="mb-3 font-normal text-gray dark:text-gray-400">
                {" "}
                Explore opportunities for collaboration, partnerships, or
                discuss your business needs with us.{" "}
              </p>
              <a href="https://Calendly.com/robert-ksk" target="_blank">
                {" "}
                <button className="text-sm  my-3 mt-9  p-3 block w-fit  bg-white border-2 border-gray/20 text-black font-bold rounded-full dark:bg-primary">
                  Click to Schedule a business consultation meeting.
                </button>
              </a>
            </div>
            <div className="max-w-sm p-6 bg-[#fcfcfd] border border-white rounded-2xl shadow dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none">
              <svg
                width="34"
                height="27"
                viewBox="0 0 34 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.2 0H2.8C2.05982 0.00370093 1.35122 0.300333 0.829145 0.825034C0.307067 1.34974 0.0139907 2.05981 0.014 2.8L0 28L5.6 22.4H25.2C25.942 22.3979 26.6529 22.1022 27.1776 21.5776C27.7022 21.0529 27.9979 20.342 28 19.6V2.8C27.9979 2.05804 27.7022 1.34708 27.1776 0.822433C26.6529 0.297788 25.942 0.00211084 25.2 0ZM5.6 9.8H22.4V12.6H5.6V9.8ZM16.8 16.8H5.6V14H16.8V16.8ZM22.4 8.4H5.6V5.6H22.4V8.4Z"
                  fill="#5C96FD"
                />
              </svg>

              <h5 className="my-3 text-2xl font-semibold tracking-tight text-black dark:text-white">
                Technical Support
              </h5>

              <p className="mb-3 font-normal text-gray dark:text-gray-400">
                Having technical issues or questions about our products or
                services?
                <br /> Talk to Our technical support team is here to help.{" "}
              </p>
              <a href="https://calendly.com/aleenanaseer" target="_blank">
                {" "}
                <button className=" text-sm my-3  p-3 block w-fit  bg-white border-2 border-gray/20 text-black font-bold rounded-full dark:bg-primary">
                  Schedule a technical support meeting now.
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quote;
