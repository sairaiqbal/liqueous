"use client";
import Link from "next/link";
import React from "react";

interface LandingCardProps {
  tickerData: { code: string };
}



const LandingCards: React.FC<LandingCardProps> = ({ tickerData }) => {
    
  console.log("landing", tickerData);
  return (
    <div>
      <div className="w-full">
        <div className="text-4xl font-bold text-black text-center p-6 mb-4 ml-6">
          Choose <span className="text-primary">Core</span> Program
        </div>

        <div className="flex lg:flex-row flex-col gap-4 p-6 bg-[#fcfcfd] rounded-sm justify-center">
          <div className="lg:max-w-sm w-full py-8 pt-12 p-6 bg-white border border-white flex justify-center rounded-3xl shadow-2xl hover:border-primary hover:shadow-xl ">
            <div>
              <div className="flex justify-center">
                <div className="text-2xl font-bold text-black  mb-4">
                  BORRO by Liqueous
                </div>
              </div>
              <div className="">
                <p className="text-black text-base text-center">
                  Maintain Ownership, Enhance Liquidity with Our Beneficial
                  Ownership Retention Repurchase Option (BORRO){" "}
                </p>
              </div>
              <div className="my-6">
                <div className="flex items-center">
                  <svg
                    className="inline-flex"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.49967 17.4163C13.8538 17.4163 17.4163 13.8538 17.4163 9.49967C17.4163 5.14551 13.8538 1.58301 9.49967 1.58301C5.14551 1.58301 1.58301 5.14551 1.58301 9.49967C1.58301 13.8538 5.14551 17.4163 9.49967 17.4163Z"
                      fill="#22C553"
                    />
                    <path
                      d="M6.13574 9.50018L8.37616 11.7406L12.8649 7.25977"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-[#7780a1] pl-4">Access Liquidity</p>
                </div>
                <div className="flex items-center">
                  <svg
                    className="inline-flex"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.49967 17.4163C13.8538 17.4163 17.4163 13.8538 17.4163 9.49967C17.4163 5.14551 13.8538 1.58301 9.49967 1.58301C5.14551 1.58301 1.58301 5.14551 1.58301 9.49967C1.58301 13.8538 5.14551 17.4163 9.49967 17.4163Z"
                      fill="#22C553"
                    />
                    <path
                      d="M6.13574 9.50018L8.37616 11.7406L12.8649 7.25977"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-[#7780a1] pl-4">
                    Retain Beneficial Ownership
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    className="inline-flex"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.49967 17.4163C13.8538 17.4163 17.4163 13.8538 17.4163 9.49967C17.4163 5.14551 13.8538 1.58301 9.49967 1.58301C5.14551 1.58301 1.58301 5.14551 1.58301 9.49967C1.58301 13.8538 5.14551 17.4163 9.49967 17.4163Z"
                      fill="#22C553"
                    />
                    <path
                      d="M6.13574 9.50018L8.37616 11.7406L12.8649 7.25977"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-[#7780a1] pl-4">Flexible Terms</p>
                </div>
              </div>
              <Link href={`/quote/US/${tickerData?.code}/Financing`}>
                <button
                  className="btn mx-auto  block w-fit  mr-auto ml-auto bg-primary text-white rounded-full"
                  // onClick={getFinance}
                >
                  Proceed
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:max-w-sm w-full py-8 pt-12  p-6 bg-white border border-white flex justify-center rounded-3xl shadow-2xl hover:border-primary hover:shadow-xl  ">
            <div>
              <div className="flex justify-center">
                <div className="text-2xl font-bold text-black  mb-4">
                  Private Block Sale
                </div>
              </div>
              <div className="">
                <p className="text-black text-base text-center">
                  Striking a balance between mitigating price impact from
                  concentrated selling. (Private Block Sale){" "}
                </p>
              </div>
              <div className="my-6">
                <div className="flex items-center">
                  <svg
                    className="inline-flex"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.49967 17.4163C13.8538 17.4163 17.4163 13.8538 17.4163 9.49967C17.4163 5.14551 13.8538 1.58301 9.49967 1.58301C5.14551 1.58301 1.58301 5.14551 1.58301 9.49967C1.58301 13.8538 5.14551 17.4163 9.49967 17.4163Z"
                      fill="#22C553"
                    />
                    <path
                      d="M6.13574 9.50018L8.37616 11.7406L12.8649 7.25977"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-[#7780a1] pl-4">Mitigate Market Impact</p>
                </div>
                <div className="flex items-center">
                  <svg
                    className="inline-flex"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.49967 17.4163C13.8538 17.4163 17.4163 13.8538 17.4163 9.49967C17.4163 5.14551 13.8538 1.58301 9.49967 1.58301C5.14551 1.58301 1.58301 5.14551 1.58301 9.49967C1.58301 13.8538 5.14551 17.4163 9.49967 17.4163Z"
                      fill="#22C553"
                    />
                    <path
                      d="M6.13574 9.50018L8.37616 11.7406L12.8649 7.25977"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-[#7780a1] pl-4">
                    Flexibility & Symbiotic Approach
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    className="inline-flex"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.49967 17.4163C13.8538 17.4163 17.4163 13.8538 17.4163 9.49967C17.4163 5.14551 13.8538 1.58301 9.49967 1.58301C5.14551 1.58301 1.58301 5.14551 1.58301 9.49967C1.58301 13.8538 5.14551 17.4163 9.49967 17.4163Z"
                      fill="#22C553"
                    />
                    <path
                      d="M6.13574 9.50018L8.37616 11.7406L12.8649 7.25977"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-[#7780a1] pl-4">Maximizing Returns</p>
                </div>
              </div>
              <Link href={`/quote/US/${tickerData?.code}/Sale`}>
                <button
                  className="btn mx-auto  block w-fit  mr-auto ml-auto bg-primary text-white rounded-full"
                  // onClick={getSale}
                >
                  Proceed
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:max-w-sm w-full py-8 pt-12  p-6 bg-white border border-white flex justify-center rounded-3xl shadow-2xl hover:border-primary hover:shadow-xl  ">
            <div>
              <div className="flex justify-center">
                <div className="text-2xl font-bold text-black  mb-4">
                  Equity Lines Of Credit
                </div>
              </div>
              <div className="">
                <p className="text-black text-base text-center">
                  Designed to equip businesses with the financial agility they
                  need to seize growth opportunities. Equity Lines of Credit
                  (ELOC){" "}
                </p>
              </div>
              <div className="my-6">
                <div className="flex items-center">
                  <svg
                    className="inline-flex"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.49967 17.4163C13.8538 17.4163 17.4163 13.8538 17.4163 9.49967C17.4163 5.14551 13.8538 1.58301 9.49967 1.58301C5.14551 1.58301 1.58301 5.14551 1.58301 9.49967C1.58301 13.8538 5.14551 17.4163 9.49967 17.4163Z"
                      fill="#22C553"
                    />
                    <path
                      d="M6.13574 9.50018L8.37616 11.7406L12.8649 7.25977"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-[#7780a1] pl-4">
                    Control Over Capital Raising
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    className="inline-flex"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.49967 17.4163C13.8538 17.4163 17.4163 13.8538 17.4163 9.49967C17.4163 5.14551 13.8538 1.58301 9.49967 1.58301C5.14551 1.58301 1.58301 5.14551 1.58301 9.49967C1.58301 13.8538 5.14551 17.4163 9.49967 17.4163Z"
                      fill="#22C553"
                    />
                    <path
                      d="M6.13574 9.50018L8.37616 11.7406L12.8649 7.25977"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-[#7780a1] pl-4">Predictable Dilution</p>
                </div>
                <div className="flex items-center">
                  <svg
                    className="inline-flex"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.49967 17.4163C13.8538 17.4163 17.4163 13.8538 17.4163 9.49967C17.4163 5.14551 13.8538 1.58301 9.49967 1.58301C5.14551 1.58301 1.58301 5.14551 1.58301 9.49967C1.58301 13.8538 5.14551 17.4163 9.49967 17.4163Z"
                      fill="#22C553"
                    />
                    <path
                      d="M6.13574 9.50018L8.37616 11.7406L12.8649 7.25977"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-[#7780a1] pl-4">Interim Bridge Terms</p>
                </div>
              </div>
              <Link href={`/quote/US/${tickerData?.code}/EquityLine`}>
                <button
                  className="btn mx-auto  block w-fit  mr-auto ml-auto bg-primary text-white rounded-full"
                  // onClick={getEquity}
                >
                  Proceed
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCards;
