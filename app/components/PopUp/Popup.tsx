import React, { useState } from "react";
import SearchBar from "@/app/components/SearchBar/SearchBar";
const Popup = ({setIsOpen}) => {
    
    const handleClick = () =>{
        setIsOpen(false);
    }
  return (
    <div
      id="popup-container"
      className="fixed none top-0 left-0 w-full h-full  z-[100] bg-[#00000080] p-5"
    >
      <div
        id="popup"
        className=" rounded-3xl py-10  lg:w-[42%] md:w-[60%] w-[90%] min-h-[460px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pl-5 pr-5 pt-5 pb-10 z-[100] bg-white"
      >
        <div className="flex justify-end">
          <button className="" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray"
            >
              <path d="M6.697 4.575L4.575 6.697 9.88 12l-5.304 5.303 2.122 2.122L12 14.12l5.303 5.304 2.122-2.122L14.12 12l5.304-5.303-2.122-2.122L12 9.88 6.697 4.575z"></path>
            </svg>
          </button>
        </div>
        <div className="flex justify-center">
          <svg
            className="w-16 h-16"
            width="100"
            height="67"
            viewBox="0 0 100 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_5888_8295)">
              <path
                d="M68.1275 8.25L77.6364 17.7425L57.3639 37.974L40.765 21.3998L10 52.1538L15.8544 58L40.765 33.125L57.3721 49.7074L83.5292 23.6298L93.0381 33.125V8.25H68.1275Z"
                fill="#5C96FD"
                stroke="#777E90"
                stroke-opacity="0.1"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_5888_8295"
                x="0.292969"
                y="0.75"
                width="104.246"
                height="70.9565"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="1" dy="3" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_5888_8295"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_5888_8295"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <div className="text-black font-extrabold text-3xl my-4 text-center">
          GET AN ESTIMATE?
        </div>
        <p className="text-center text-[#B1B1B1] mt-2">
          Search for a Company or Symbol, and you will get an estimate of{" "}
        </p>
        <p className="text-center text-[#B1B1B1] mb-2">
          the maximum amount available.
        </p>

        {/* <div className="relative text-center ">
          <div className="relative  mr-auto ml-auto my-8">
            <div>
              <div className="absolute top-4 lg:right-12 right-6 text-primary">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7363 17.4637L14.6512 13.3785C15.6799 12.0753 16.3 10.4347 16.3 8.65C16.3 4.4317 12.8683 1 8.65 1C4.4317 1 1 4.4317 1 8.65C1 12.8683 4.4317 16.3 8.65 16.3C10.4356 16.3 12.0754 15.6808 13.3786 14.6512L17.4637 18.7363C17.6392 18.9118 17.8696 19 18.1 19C18.3304 19 18.5608 18.9118 18.7363 18.7363C19.0882 18.3844 19.0882 17.8156 18.7363 17.4637ZM2.8 8.65C2.8 5.4244 5.4244 2.8 8.65 2.8C11.8756 2.8 14.5 5.4244 14.5 8.65C14.5 11.8756 11.8756 14.5 8.65 14.5C5.4244 14.5 2.8 11.8756 2.8 8.65Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="absolute top-14 z-10 w-full text-black font-bold outline-none dark:bg-gray-dark max-h-60 overflow-auto">
              <ul className="py-1">
                <li className="px-4 py-2 mb-1 rounded-2xl text-left cursor-pointer bg-white text-black hover:text-primary">
                  <div className="flex justify-between ">
                    <span className="font-thin whitespace-nowrap text-clip "></span>
                  </div>
                  <div className="flex justify-between "></div>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <SearchBar showButton={false}/>
        <div className="text-[#777E90] text-base font-semibold  text-center mt-6 mb-4 p-4">
          Call our Toll Free Number{" "}
          <a href="tel:+18665303357" className="text-primary underline">
            (+1)866-530-3357
          </a>{" "}
          for further assistance.
        </div>
      </div>
    </div>
  );
};

export default Popup;
