"use client";
import { useEffect, useState } from "react";
import React from "react";
import LineChart from "./applyLoan";
// import getTickerDetailById from "@/app/Utils/getTickerDetailById";
import AOS from "aos";
import "aos/dist/aos.css";
// import Link from "next/link";
interface LoadingErrorProps {
  // params: {
  //   tickerDetail: object;
  // };

  params: {
    fundamentals?: {
      General: {
        Code?: string;
        Name?: string;
        Type?: string;
      };
    };
    series?: Array<any>; // Define the correct type for series
    growth?: number;
    market_cap?: number;
    price?: number;
    logo_url?: string;
  };
}

const LoadingError: React.FC<LoadingErrorProps> = ({ params }) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!params) {
      setError("The stock you requested was not found!");
    } else {
      // Data is loading without errors
      setError(null);
    }
  }, [params]);

  useEffect(() => {
    AOS.init({
      // Customize AOS configuration here
      duration: 1000, // Animation duration (in milliseconds)
      easing: "ease-in-out", // Easing function
      once: true, // Apply animations only once
    });
  }, []);

  //  console.log("params recieved : ", params);

  const tickerData = {
    code: params?.fundamentals?.General?.Code,
    name: params?.fundamentals?.General?.Name,
    type: params?.fundamentals?.General?.Type,
    alphabet: params?.fundamentals?.General?.Code?.[0],
    price: params?.price,
    growth: params?.growth,
    logo: params?.logo_url,
  };
  // console.log(tickerData)
  return (
    <>
      <div>
        {!params ? (
          <div className="flex justify-center items-center h-20">
            {!error ? (
              <>
                <div className="border-4 border-t-4 border-gray-200 rounded-full w-12 h-12 animate-spin"></div>
                <span className="ml-2">Loading, Please wait ...</span>
              </>
            ) : (
              <div className="pt-10 flex min-h-[500px] items-center justify-center">
                <div className="p-5 text-center font-semibold">
                  <p className="text-lg">{error}</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-center p-8 rounded-[18px]">
            <div
              className="rounded-[18px] w-full bg-white p-4 lg:pl-8 dark:bg-black"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="flex justify-between">
                <div className=" gap-2.5">
                  {!!tickerData.logo ? (
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full">
                      <img src={tickerData.logo} />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-12 min-w-8 h-12 min-h-8 mr-1 rounded-full text-lg uppercase text-white bg-gray-dark dark:text-gray-dark dark:bg-gray">
                      {!!tickerData.code ? tickerData.alphabet : ""}
                    </div>
                  )}

                  <h4 className="text-lg font-bold text-black dark:text-white pt-4">
                    {tickerData.code}
                  </h4>
                  <span className="rounded bg-[rgba(198,198,198,0.4)] py-1 px-[6px] text-[10px] font-semibold leading-3 text-black dark:text-white">
                    {tickerData.name}
                  </span>
                </div>
                <div>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`tickerData.growth >= 0 ? '' : 'rotate-180'`}
                  >
                    {tickerData.growth >= 0 ? (
                      <path
                        d="M17 19.9815L24 14M24 14L31 19.9815M24 14V33"
                        stroke="#12AF97"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    ) : (
                      <path
                        d="M17 19.9815L24 14M24 14L31 19.9815M24 14V33"
                        stroke="#FF0000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                  </svg>
                </div>
              </div>
              <div className="my-4 h-[1px] bg-[#11011E] opacity-5"></div>
              <div className="lg:flex  justify-between gap-2">
                <div>
                  <h4 className="text-lg font-bold text-black dark:text-white">
                    Last Close Price: ${tickerData.price | 0}
                  </h4>

                  {params?.market_cap > 0 && (
                    <h3 className="mt-4 text-xl font-bold leading-[25px] text-black dark:text-white">
                      Market Cap: {params?.market_cap.toLocaleString()}
                    </h3>
                  )}

                  <h4
                    className={`mt-4 text-lg font-semibold ${
                      params?.growth >= 0 ? "text-[#12AF97]" : "text-[#FF0000]"
                    }`}
                  >
                    Growth: {tickerData.growth}%
                  </h4>
                </div>
                <div className="flex flex-col flex-auto">
                  {/* <app-line-chart className="flex-auto w-full h-full" [data]="symbolData.series[0].data">
                                </app-line-chart> */}
                  <LineChart data={params.series[0].data} />
                </div>
              </div>
            </div>
          </div>
        )}
        ;
      </div>
    
    </>
  );
};

export default LoadingError;
