import React from "react";
import ContactForm from "./contactForm";
import Link from "next/link";

let renders = 0;
const ContactUs = () => {
  renders++;
  console.log(renders);

  return (
    // <div className="-mt-[82px] flex-grow overflow-x-hidden lg:-mt-[106px]">
    <div className="overflow-x-hidden  bg-white dark:bg-gray-dark">
      <div className=" overflow-hidden   pt-[82px] sm:-mx-[250px]  lg:-mx-[150px] lg:pt-[106px]">
        <div className="relative ">
          <img
            src="/assets/images/banner-lefticon.png"
            alt="banner-lefticon"
            className="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]"
          />
          <img
            src="/assets/images/banner-rightIcon.png"
            alt="banner-rightIcon"
            className="absolute right-0 -top-4 sm:right-[250px] lg:right-[150px]"
          />
          <div className="container  pt-14">
            <div className="heading text-center mb-6">
              <h4 className=""> Reach Out Today for</h4>
              <h4>
                {" "}
                <span className="text-primary"> Customized </span> Financial
                Solutions
              </h4>
            </div>
            <div className="flex justify-center">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.318 10.364L24.938 6.8L28.5 5.182L24.938 3.563L23.318 0L21.7 3.563L18.136 5.182L21.7 6.8L23.318 10.364ZM13.602 11.012L10.364 3.886L7.125 11.011L0 14.25L7.125 17.489L10.364 24.614L13.6 17.489L20.725 14.25L13.602 11.012ZM23.318 18.137L21.7 21.7L18.138 23.319L21.7 24.938L23.318 28.5L24.937 24.938L28.5 23.318L24.938 21.7L23.318 18.137Z"
                  fill="#5C96FD"
                />
              </svg>
            </div>

            <div className=" flex justify-center text-center items-end ">
              <div className=" lg:w-[77%] lg:px-14 lg:pb-4 pb-2 px-2 w-full dark:bg-black ">
                <p className="pt-30 lg:pt-6">
                  We understand that navigating the financial landscape can be
                  daunting. Whether you’re considering an equity line of credit,
                  exploring a private block purchase, or seeking comprehensive
                  financial solutions, our team at Liqueous is ready to help.
                  We’re committed to providing tailored solutions that align
                  with your unique financial needs and business goals.
                </p>
              </div>
            </div>
            <div className="relative container  mt-[100px] mb-[50px] lg:mb-0  ">
              <div className="relative ">
                <div className="container   flex justify-center lg:my-[100px]">
                  <div className="lg:h-[15rem] h-[26rem] w-[64rem] bg-[#f3f3fe] rounded-xl flex justify-center items-center dark:border-2 dark:border-gray dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none  ">
                    <div className="flex h-full w-full justify-between "></div>
                  </div>
                </div>
              </div>

              <div className=" container absolute top-0 left-0 z-10 flex justify-center pt-8 ">
                <div className="lg:h-[11rem] h-[22rem] lg:w-[58rem] rounded-xl bg-white flex justify-center items-center w-[18rem] dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none   ">
                  <div className="w-11/12  ">
                    <div className="lg:flex justify-between w-full ">
                      <div className="flex items-center justify-center ">
                        <div className="flex-auto w-75  text-center lg:text-start">
                          <h2 className="text-4xl font-extrabold leading-normal sm:text-6xl lg:text-[50px] lg:leading-[60px]">
                            <span className="text-primary text-xl">
                              Call us Today,{" "}
                            </span>{" "}
                          </h2>
                          <h2 className="text-2xl font-extrabold text-black dark:text-white">
                            Our{" "}
                            <span className="text-secondary">Toll Free</span>{" "}
                            Number is:
                          </h2>
                        </div>
                      </div>
                      <div className="flex items-center w-25 ">
                        <svg
                          fill="#5c96fd"
                          height="50px"
                          width="50px"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 473.806 473.806"
                          xmlSpace="preserve"
                        >
                          <g>
                            <g>
                              <path
                                d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4
			c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8
			c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6
			c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5
			c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26
			c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9
			c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806
			C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20
			c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6
			c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1
			c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3
			c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5
			c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8
			c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9
			l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1
			C420.456,377.706,420.456,388.206,410.256,398.806z"
                              />
                              <path
                                d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2
			c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11
			S248.656,111.506,256.056,112.706z"
                              />
                              <path
                                d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11
			c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2
			c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"
                              />
                            </g>
                          </g>
                        </svg>

                        <Link
                          href="tel:+18665303357"
                          className="text-primary text-2xl font-bold ml-4"
                        >
                          (+1)866-530-3357
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center ">
              <div className="grid items-center gap-16 lg:grid-cols-2 xl:items-start pt-10 ">
                <div className="lg:order-2 order:1 md:col-span-2 lg:col-auto flex justify-center ">
                  <div className="text-center font-semibold ltr:md:text-left rtl:md:text-right  ">
                    <div className=" flex justify-center items-center  lg:w-[28rem] h-[23rem] w-[22rem]  bg-[#f3f3fe]  rounded-xl ">
                      <div className="lg:w-[24rem] h-[19rem] w-[18rem] bg-white rounded-xl p-7 pt-10">
                        <div className="flex justify-center lg:block">
                          <svg
                            width="29"
                            height="29"
                            viewBox="0 0 29 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.25 0.5C11.4316 0.5 8.67653 1.33575 6.33313 2.90156C3.98973 4.46737 2.16327 6.69291 1.08472 9.29676C0.00617421 11.9006 -0.276023 14.7658 0.273816 17.53C0.823656 20.2943 2.18084 22.8334 4.17374 24.8263C6.16663 26.8192 8.70574 28.1764 11.47 28.7262C14.2342 29.276 17.0994 28.9938 19.7032 27.9153C22.3071 26.8367 24.5326 25.0103 26.0984 22.6669C27.6643 20.3235 28.5 17.5684 28.5 14.75C28.4889 10.9741 26.984 7.35596 24.314 4.68597C21.644 2.01597 18.0259 0.51108 14.25 0.5ZM17.1 20.022C16.9324 20.119 16.747 20.1812 16.5548 20.205C16.3627 20.2288 16.1677 20.2137 15.9815 20.1605C15.7953 20.1073 15.6218 20.0171 15.4712 19.8954C15.3206 19.7737 15.1961 19.6229 15.105 19.452L12.968 15.462C12.8527 15.2431 12.803 14.9955 12.825 14.749V7.625C12.825 7.24707 12.9751 6.88461 13.2424 6.61737C13.5096 6.35013 13.8721 6.2 14.25 6.2C14.6279 6.2 14.9904 6.35013 15.2576 6.61737C15.5249 6.88461 15.675 7.24707 15.675 7.625V14.325L17.67 18.025C17.8327 18.3705 17.8646 18.7633 17.7598 19.1305C17.655 19.4977 17.4206 19.8145 17.1 20.022Z"
                              fill="#5C96FD"
                            />
                          </svg>
                        </div>

                        <h5 className="my-5 text-2xl font-semibold tracking-tight text-black dark:text-white">
                          Our Hours
                        </h5>

                        <p className="mb-2 font-normal text-gray dark:text-gray-400">
                          We operate Monday to Friday, from 9:00 AM{" "}
                        </p>
                        <p className="mb-2 font-normal text-gray dark:text-gray-400">
                          {" "}
                          to 5:00 PM Eastern Time. We are closed on
                        </p>
                        <p className="mb-3 font-normal text-gray dark:text-gray-400">
                          {" "}
                          public holidays.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:order-1 order:2 md:col-span-2 lg:col-auto flex justify-center ">
                  <div className="text-center font-semibold ltr:md:text-left rtl:md:text-right  ">
                    <div className=" flex justify-center items-center  lg:w-[28rem] h-[23rem] w-[22rem]  bg-[#f3f3fe] rounded-xl  ">
                      <div className="lg:w-[24rem] h-[19rem] w-[18rem] bg-white rounded-xl p-7 pt-10">
                        <div className="flex justify-center lg:block">
                          <svg
                            width="24"
                            height="29"
                            viewBox="0 0 24 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.9781 0.5C8.95571 0.503441 6.05808 1.70561 3.92091 3.84278C1.78374 5.97995 0.581566 8.87759 0.578125 11.9C0.578125 16.538 3.94513 20.39 7.51213 24.467C8.64112 25.758 9.81213 27.093 10.8491 28.444C10.9822 28.6167 11.1532 28.7565 11.3489 28.8527C11.5445 28.9489 11.7596 28.9989 11.9776 28.9989C12.1956 28.9989 12.4107 28.9489 12.6064 28.8527C12.802 28.7565 12.973 28.6167 13.1061 28.444C14.1461 27.093 15.3151 25.758 16.4431 24.467C20.0111 20.39 23.3781 16.538 23.3781 11.9C23.3747 8.87759 22.1725 5.97995 20.0353 3.84278C17.8982 1.70561 15.0005 0.503441 11.9781 0.5ZM11.9781 16.175C11.1326 16.175 10.3061 15.9243 9.60306 15.4545C8.90004 14.9848 8.3521 14.3171 8.02854 13.536C7.70498 12.7548 7.62032 11.8953 7.78527 11.066C7.95022 10.2367 8.35737 9.47499 8.95524 8.87712C9.55311 8.27925 10.3148 7.87209 11.1441 7.70714C11.9734 7.54219 12.8329 7.62685 13.6141 7.95041C14.3953 8.27398 15.0629 8.82192 15.5327 9.52494C16.0024 10.228 16.2531 11.0545 16.2531 11.9C16.2531 12.4614 16.1425 13.0173 15.9277 13.536C15.7129 14.0546 15.398 14.5259 15.001 14.9229C14.604 15.3199 14.1328 15.6347 13.6141 15.8496C13.0954 16.0644 12.5395 16.175 11.9781 16.175Z"
                              fill="#5C96FD"
                            />
                          </svg>
                        </div>

                        <h5 className="my-5 text-2xl font-semibold tracking-tight text-black dark:text-white">
                          Our Office
                        </h5>

                        <p className="mb-2 font-normal text-gray dark:text-gray-400">
                          Liqueous LP
                        </p>
                        <p className="mb-2 font-normal text-gray dark:text-gray-400">
                          {" "}
                          8 THE GRN NUM 15337
                        </p>
                        <p className="mb-3 font-normal text-gray dark:text-gray-400">
                          {" "}
                          DOVER, DE 19901{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section>
        <div className="container my-[100px]">
          <div className="heading text-center">
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

            <h4>Get in Touch</h4>

            <p> To discuss your financial needs or to learn more about</p>
            <p> our services, please reach out to us: </p>
          </div>
          <div className="flex justify-center">
            <div className="grid items-center gap-8 lg:gap-16 md:grid-cols-1 lg:grid-cols-1 xl:items-start ">
              <div className="lg:order-2 order:1 md:col-span-2 lg:col-auto flex justify-center ">
                <div className="text-center font-semibold ltr:md:text-left rtl:md:text-right  ">
                  <div className=" flex justify-center items-center   h-[9rem] w-[22rem] lg:w-[28rem] bg-[#f3f3fe]  rounded-xl ">
                    <div className=" h-[5rem] w-[18rem] lg:w-[24rem] bg-white rounded-xl p-5">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-10 text-center">
              <p className=" font-normal text-gray dark:text-gray-400 ">
                Alternatively, you can fill out the contact form below, and one
                of{" "}
              </p>
              <p className=" mb-3font-normal text-gray dark:text-gray-400 ">
                our <span className="text-secondary">representatives</span> will
                get back to you as soon as possible.
              </p>
            </div>
          </div>
          <div className="container flex justify-center">
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3   mx-4 lg:mx-0">
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
                  Our advisory services are designed to provide you with
                  valuable insights and recommendations.{" "}
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
                <a href="https://calendly.com/chaudhry-umar" target="_blank">
                  {" "}
                  <button className=" text-sm my-3  p-3 block w-fit  bg-white border-2 border-gray/20 text-black font-bold rounded-full dark:bg-primary">
                    Schedule a technical support meeting now.
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative container ">
        <div className="relative ">
          <div className="container h-[470px]  lg:w-4/5 bg-gradient-to-r to-transparent rounded-3xl lg:py-[50px] flex justify-around">
            <div className="flex h-full w-full justify-between ">
              <div className="h-full w-36 relative  left-[15%] flex items-center  ">
                <img src="/assets/images/Graphic - Left.png" />
              </div>
              <div className=" w-36 relative  top-[-50%] left-[-15%] flex items-end h-screen   ">
                <svg
                  width="252"
                  height="252"
                  viewBox="0 0 252 252"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M111.723 14.1421C119.533 6.33165 132.197 6.33165 140.007 14.1421L237.588 111.723C245.398 119.533 245.398 132.197 237.588 140.007L140.007 237.588C132.197 245.398 119.533 245.398 111.723 237.588L14.1421 140.007C6.33162 132.197 6.33162 119.533 14.1421 111.723L111.723 14.1421Z"
                    fill="white"
                  />
                  <path
                    d="M177.355 177.095C148.918 205.532 102.812 205.532 74.3748 177.095C45.9375 148.657 45.9373 102.552 74.3748 74.1143C102.812 45.677 148.918 45.677 177.355 74.1143C205.793 102.552 205.792 148.657 177.355 177.095Z"
                    fill="#C8C2FC"
                  />
                  <path
                    d="M56.671 106.734C49.694 131.18 55.7385 158.458 74.8564 177.576C103.028 205.748 148.918 205.532 177.355 177.095C205.792 148.657 206.008 102.767 177.837 74.5959L126.347 126.086L56.671 106.734Z"
                    fill="#6C4FFE"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className=" container  absolute top-0 left-0 z-0  flex justify-center mt-10 ">
          <ContactForm />
        </div>

        {/* <ContactForm /> */}
      </div>
      {/* <div className="relative container  lg:mt-[350px] mt-[24rem] ">
          <!-- <div className="relative ">
            <div className="container   flex justify-center lg:my-[100px]">
                <div
                    className="h-[28rem] w-[64rem] bg-[#eff6ff] rounded-xl flex justify-center items-center dark:border-2 dark:border-gray dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none  ">
                   

                </div>
            </div>
        </div> -->

          <!-- <div className=" flex justify-center lg:mb-[100px] mb-[80px]">
            <div
                className="lg:h-[24rem] h-[30rem] lg:w-5/6 w-full border-[28px] border-[#f3f3fe] rounded-xl bg-white flex justify-center items-center  dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none   ">

                <div className="w-5/6 text-center ">
                    <div className="flex justify-center lg:pb-5 ">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.986 1.5762e-05C11.2177 0.0027841 8.51229 0.826222 6.21184 2.36624C3.9114 3.90627 2.11916 6.09373 1.06168 8.65214C0.00419843 11.2106 -0.271052 14.025 0.270722 16.7399C0.812495 19.4547 2.14697 21.9479 4.10546 23.9044C6.06395 25.861 8.55854 27.193 11.2739 27.732C13.9892 28.2711 16.8035 27.993 19.3608 26.933C21.9182 25.8729 24.1038 24.0785 25.6415 21.7765C27.1793 19.4746 28 16.7684 28 14C28.0009 12.1601 27.639 10.338 26.9349 8.63812C26.2307 6.93823 25.1983 5.3939 23.8966 4.09351C22.5949 2.79312 21.0496 1.76222 19.349 1.0598C17.6484 0.357388 15.8259 -0.00274577 13.986 1.5762e-05ZM19.922 22.4L14 18.83L8.07801 22.4L9.64601 15.666L4.42401 11.144L11.312 10.556L14 4.20002L16.688 10.542L23.576 11.13L18.354 15.652L19.922 22.4Z" fill="#5C96FD"/>
                            </svg>
                    </div>
                    <div>
                        <p className="text-xl">
                            Follow us on our <span className="text-primary">social media </span> platforms  </p>
                          <p className="text-xl">to stay updated with our latest news and offerings:</p>  
                      
                    </div>
                   <div className="flex justify-center lg:block ">
                    <div className="lg:flex justify-around lg:my-8  ">
                        <div className="flex py-2">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.225 0.854903H1.775C1.31076 0.848493 0.862987 1.02672 0.530129 1.35039C0.197271 1.67406 0.00658453 2.11667 0 2.5809V23.2739C0.00658453 23.7381 0.197271 24.1808 0.530129 24.5044C0.862987 24.8281 1.31076 25.0063 1.775 24.9999H22.225C22.6892 25.0063 23.137 24.8281 23.4699 24.5044C23.8027 24.1808 23.9934 23.7381 24 23.2739V2.5809C23.9934 2.11667 23.8027 1.67406 23.4699 1.35039C23.137 1.02672 22.6892 0.848493 22.225 0.854903ZM7.28 21.0639H3.658V10.1989H7.28V21.0639ZM5.469 8.6779C4.96946 8.6779 4.49039 8.47946 4.13716 8.12624C3.78394 7.77301 3.5855 7.29394 3.5855 6.7944C3.5855 6.29487 3.78394 5.81579 4.13716 5.46257C4.49039 5.10934 4.96946 4.9109 5.469 4.9109C5.73726 4.87532 6.01003 4.89745 6.26905 4.97581C6.52807 5.05417 6.76736 5.18696 6.97091 5.36529C7.17445 5.54362 7.33756 5.76337 7.4493 6.00983C7.56105 6.2563 7.61886 6.52379 7.61886 6.7944C7.61886 7.06502 7.56105 7.33251 7.4493 7.57897C7.33756 7.82544 7.17445 8.04519 6.97091 8.22352C6.76736 8.40184 6.52807 8.53463 6.26905 8.613C6.01003 8.69136 5.73726 8.71349 5.469 8.6779ZM20.34 21.0639H16.72V15.2329C16.72 13.7719 16.201 12.8189 14.885 12.8189C14.4778 12.8219 14.0812 12.9497 13.7489 13.185C13.4165 13.4203 13.1642 13.7518 13.026 14.1349C12.9315 14.4185 12.8905 14.7173 12.905 15.0159V21.0549H9.284V10.1869H12.906V11.7199C13.235 11.1489 13.7136 10.6786 14.2902 10.3594C14.8668 10.0403 15.5195 9.88455 16.178 9.9089C18.592 9.9089 20.343 11.4659 20.343 14.8089L20.34 21.0639Z" fill="#5C96FD"/>
                                </svg>
                            <p className="pl-2">Liqueous</p>
                        </div>
                        <div className="flex py-2 ">
                            <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.253 3.17801C27.1909 3.63726 26.0679 3.9404 24.919 4.07801C26.1301 3.35545 27.0385 2.21866 27.476 0.878006C26.3368 1.55625 25.0897 2.03417 23.789 2.29101C22.9195 1.34735 21.7612 0.719153 20.496 0.505038C19.2308 0.290924 17.9303 0.503012 16.7987 1.10801C15.6671 1.71301 14.7684 2.67666 14.2438 3.84769C13.7191 5.01871 13.5982 6.33081 13.9 7.57801C11.5966 7.46118 9.34351 6.86108 7.28715 5.81671C5.23078 4.77233 3.41713 3.30703 1.964 1.51601C1.45426 2.40616 1.18638 3.41423 1.187 4.44001C1.18524 5.39264 1.41904 6.33094 1.8676 7.17136C2.31617 8.01178 2.96557 8.72826 3.758 9.25701C2.8368 9.23217 1.93523 8.98516 1.13 8.53701V8.60801C1.13708 9.94273 1.60493 11.2341 2.45442 12.2636C3.30391 13.2931 4.4829 13.9976 5.792 14.258C5.28801 14.4113 4.76476 14.4921 4.238 14.498C3.87326 14.4934 3.50947 14.46 3.15 14.398C3.52278 15.5462 4.24416 16.5496 5.21379 17.2687C6.18342 17.9877 7.35307 18.3867 8.56 18.41C6.52233 20.0142 4.00632 20.89 1.413 20.898C0.940679 20.8995 0.468737 20.8711 0 20.813C2.64807 22.5226 5.734 23.4301 8.886 23.426C11.061 23.4485 13.2188 23.0374 15.2332 22.2167C17.2475 21.396 19.0782 20.1822 20.6182 18.646C22.1583 17.1099 23.3768 15.2824 24.2026 13.2701C25.0284 11.2578 25.445 9.1011 25.428 6.92601V6.17801C26.5368 5.34976 27.4928 4.33456 28.253 3.17801Z" fill="#5C96FD"/>
                                </svg>
                            <p  className="pl-2">@LiqueousLP</p>
                        </div>
                        <div className="flex py-2 ">
                            <svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2585 4.76704H12.4745V1.01904C11.4015 0.907462 10.3233 0.852386 9.24452 0.85404C6.03852 0.85404 3.84452 2.81104 3.84452 6.39404V9.48204H0.228516V13.682H3.84652V24.426H8.18352V13.677H11.7905L12.3325 9.47704H8.18452V6.80604C8.18452 5.56804 8.51851 4.76704 10.2585 4.76704Z" fill="#5C96FD"/>
                                </svg>
                            <p  className="pl-2">Liqueous LP</p>
                            </div>
                    </div>
                </div>
              
                    <p></p>
                    <div>
                        We look forward to connecting with you and discovering how we 
                        can help you achieve your financial objectives. Thank you for considering Liqueous as your partner in financial success.
                    </div>
                   
                   
                </div>
            </div>
        </div> -->
        </div> */}
    </div>
    // </div>
  );
};

export default ContactUs;

export function generateMetadata(){
return{
  title:"Contact Us | Liqueous",
  description:"contact us page"
}
}
