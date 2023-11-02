"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LineChart from "./lineChart";
// import LoadingError from "./loadingError";
import QuoteForm from "./quoteForm";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { usePathname } from "next/navigation";
import finalizePlan from "@/app/Utils/finalizePlan";
import generate_term_sheet from "@/app/Utils/generate_term_sheet";
import Link from "next/link";
// SwiperCore.use([Navigation, Autoplay]);
interface LoadingErrorProps {
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
interface Plan {
  term_table: string;
}
const title =
  "The annual premium rate the shareholder pays to the purchaser in order to maintain the ability to buy the shares back at a specified price in a specified date.";
// let selectedPlanIndex = -1;

const ApplyLoan: React.FC<LoadingErrorProps> = ({ params }) => {
  const [error, setError] = useState<string | null>(null);
  const [confirm, setConfirm] = useState(false);
  const [response, setResponse] = useState({
    id: "",
    plans: [],
    user_exists: "",
  });
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(-1);
  const [proceed, setProceed] = useState(false);
  const pathname = usePathname();
  const pathnameParts = pathname.split("/");

  const [id, setId] = useState("");
  const [user, setUser] = useState({});

  const [optionLookingFor, setOptionLookingFor] = useState("");
  const [congratulations, setCongratulations] = useState(false);
  //   const option_looking_for = pathname.split("/").at(4);
  //    console.log(option_looking_for);
  const toggleTitleVisibility = (index: number) => {
    if (selectedPlanIndex === index) {
      setSelectedPlanIndex(-1); // If the same SVG is clicked again, hide the title
    } else {
      setSelectedPlanIndex(index); // Show the title for the clicked SVG
    }
  };

  const closeTitleContainer = (index: number) => {
    // selectedPlanIndex = -1;
    setSelectedPlanIndex(-1);
  };
  //   console.log("res", response);
  useEffect(() => {
    if (!params) {
      setError("The stock you requested was not found!");
    } else {
      // Data is loading without errors
      setError(null);
    }
  }, [params]);

  useEffect(() => {
    console.log("plans response ", response);
    AOS.init({
      // Customize AOS configuration here
      duration: 1000, // Animation duration (in milliseconds)
      easing: "ease-in-out", // Easing function
      once: true, // Apply animations only once
    });
  }, []);

  //  console.log("params recieved : ", params);
  console.log("pathame", response);
  if (pathnameParts[4] === "EquityLine" && !congratulations) {
    console.log("resuser", response.user_exists);
    setCongratulations(true);
    console.log("cong", congratulations);
    //<Link href={`/congratulations/${user}/${optionLookingFor}/${id}`}></Link>
  }
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

  const choosePlan = async (plan: Plan) => {
    // Set loading to true to show a loading state
    setProceed(true);
    // console.log("id is ",id);
    const apiRes = await finalizePlan(optionLookingFor, id, plan?.term_table);
    setUser(apiRes.user_exists);
    console.log("final response: ", user);
    setProceed(false);

    //setDialog(true);
  };

  return (
    <div>
      <div className="lg:flex  w-full bg-gradient-to-t from-white/[55%] to-transparent ">
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
          {/* <LoadingError></LoadingError> */}
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
                        {tickerData.growth !== undefined &&
                        tickerData.growth >= 0 ? (
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
                        Last Close Price: $
                        {tickerData.price !== undefined
                          ? tickerData.price | 0
                          : 0}
                      </h4>

                      {params?.market_cap && params.market_cap > 0 && (
                        <h3 className="mt-4 text-xl font-bold leading-[25px] text-black dark:text-white">
                          Market Cap: {params.market_cap.toLocaleString()}
                        </h3>
                      )}

                      <h4
                        className={`mt-4 text-lg font-semibold ${
                          params?.growth && params.growth >= 0
                            ? "text-[#12AF97]"
                            : "text-[#FF0000]"
                        }`}
                      >
                        Growth: {tickerData.growth}%
                      </h4>
                    </div>
                    <div className="flex flex-col flex-auto">
                      <LineChart
                        data={params?.series && params.series[0].data}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        <QuoteForm
          setConfirm={setConfirm}
          setResponse={setResponse}
          setId={setId}
          setOptionLookingFor={setOptionLookingFor}
        />
      </div>

      <>
        {confirm && (
          <section id="plan-cards" className="py-8 ">
            <div className="container">
              <div className="heading text-center mt-8">
                <div className="flex justify-center">
                  <svg
                    width="41"
                    height="24"
                    viewBox="0 0 41 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.042 0L32.629 4.58L22.854 14.34L14.842 6.34L0 21.18L2.824 24L14.842 12L22.854 20L35.473 7.42L40.06 12V0H28.042Z"
                      fill="#5C96FD"
                    />
                  </svg>
                </div>
                <h4>
                  Choose <span className="text-primary">Affordable</span> Plan
                </h4>
              </div>

              <div className=" relative grid grid-cols-1 gap-[30px] md:grid-cols-1 lg:grid-cols-1 px-[1.3rem] z-10 ">
                <Swiper
                  className="w-full py-4"
                  slidesPerView="auto"
                  speed={2500}
                  loop={false}
                  spaceBetween={30}
                  navigation={true}
                  modules={[Navigation]}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    600: {
                      slidesPerView: 2,
                    },
                    1000: {
                      slidesPerView: 3,
                    },
                    1600: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {response?.plans?.map((plan: any, index) => (
                    <>
                      <div key={index}>
                        <SwiperSlide>
                          <div
                            className="relative group flex flex-col rounded-lg border-4 border-primary bg-white p-6 px-4 transition hover:bg-primary  dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                          >
                            <div className="mb-8">
                              <h3 className="text-[22px] font-black text-black dark:text-white">
                                {plan?.term_table}
                              </h3>
                            </div>
                            <div>
                              <ul className="space-y-5 pb-7 text-sm font-bold group-hover:text-white">
                                <li className="flex items-center">
                                  <div>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <circle
                                        cx="8"
                                        cy="8"
                                        r="8"
                                        fill="#45B649"
                                      />
                                      <path
                                        d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                        stroke="white"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                  <p className="ltr:pl-3 rtl:pr-3 pl-3 text-black">
                                    Premium Value:{" "}
                                    {plan?.ltv_multiplier.toFixed(0)}%
                                  </p>
                                </li>

                                <li className="flex items-center">
                                  <div>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <circle
                                        cx="8"
                                        cy="8"
                                        r="8"
                                        fill="#45B649"
                                      />
                                      <path
                                        d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                        stroke="white"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                  <p className="ltr:pl-3 rtl:pr-3 pl-3 text-black">
                                    Gross Proceeds: $
                                    {plan?.gross_proceeds.toFixed(2)}
                                  </p>
                                </li>

                                <div>
                                  {plan.origination_fee > 0 ? (
                                    <>
                                      <li className="flex items-center">
                                        <div>
                                          <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <circle
                                              cx="8"
                                              cy="8"
                                              r="8"
                                              fill="#45B649"
                                            />
                                            <path
                                              d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                              stroke="white"
                                              strokeWidth="1.6"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3 pl-3 text-black">
                                          Origination Fee:
                                          {plan.origination_fee.toFixed(0)}%
                                        </p>
                                      </li>

                                      <li className="flex items-center">
                                        <div>
                                          <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <circle
                                              cx="8"
                                              cy="8"
                                              r="8"
                                              fill="#45B649"
                                            />
                                            <path
                                              d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                              stroke="white"
                                              strokeWidth="1.6"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </svg>
                                        </div>
                                        <p className="ltr:pl-3 rtl:pr-3 text-black">
                                          Origination Amount:
                                          {plan.origination_amount.toFixed(0)}%
                                        </p>
                                      </li>
                                    </>
                                  ) : null}
                                </div>

                                <li className="flex items-center">
                                  <div>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <circle
                                        cx="8"
                                        cy="8"
                                        r="8"
                                        fill="#45B649"
                                      />
                                      <path
                                        d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                        stroke="white"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                  <p className="ltr:pl-3 rtl:pr-3 pl-3 text-black">
                                    BORRO Rate: {plan.borro_rate.toFixed(0)}%
                                  </p>
                                  &nbsp;&nbsp;&nbsp;
                                  <p className="info" title={title}>
                                    {" "}
                                  </p>
                                  <svg
                                    width="16"
                                    height="16"
                                    fill="#ebebeb"
                                    version="1.1"
                                    id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    //   xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 416.979 416.979"
                                    //   xml:space="preserve"
                                    stroke="#ebebeb"
                                  >
                                    <g
                                      id="SVGRepo_bgCarrier"
                                      strokeWidth="0"
                                    ></g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      <g>
                                        <path
                                          d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85 c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786 c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576 c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765 c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z "
                                          onClick={() =>
                                            toggleTitleVisibility(index)
                                          }
                                        ></path>
                                      </g>
                                    </g>
                                  </svg>
                                  <div
                                    className={`title-container absolute h-[17rem] w-[19rem]  bg-white text-gray shadow-lg p-8 leading-7 rounded-md ${
                                      selectedPlanIndex !== index
                                        ? "hidden"
                                        : ""
                                    } `}
                                  >
                                    <button
                                      className="close-button absolute top-0 right-0 p-2"
                                      // (click)="closeTitleContainer(index)"
                                      onClick={() => closeTitleContainer(index)}
                                    >
                                      <svg
                                        className="w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="#5991f5"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M14.348 14.849l-4.95-4.95 4.95-4.95a.8.8 0 10-1.132-1.132l-4.95 4.95-4.95-4.95a.8.8 0 00-1.132 1.132l4.95 4.95-4.95 4.95a.8.8 0 101.132 1.132l4.95-4.95 4.95 4.95a.8.8 0 001.132-1.132z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </button>
                                    {title}
                                  </div>
                                </li>
                              </ul>
                              <div className="mt-auto border-t-[3px] border-[#BBC0D0]/50 pt-7">
                                <div className="mb-3 flex flex-col items-center justify-center sm:flex-row ">
                                  <Link
                                    href={`/congratulations/${
                                      response.user_exists == "false"
                                        ? "nu"
                                        : "ou"
                                    }/${optionLookingFor}/${id}`}
                                  >
                                    <button
                                      onClick={() => choosePlan(plan)}
                                      className="btn text-l text-white group-hover:bg-white group-hover:text-primary dark:text-black xl:w-44 rounded-full"
                                    >
                                      Proceed
                                      {proceed && (
                                        <svg
                                          aria-hidden="true"
                                          role="status"
                                          className="inline w-4 h-4 ml-3 mr-3 text-white animate-spin"
                                          viewBox="0 0 100 101"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="#E5E7EB"
                                          />
                                          <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentColor"
                                          />
                                        </svg>
                                      )}
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>
                    </>
                  ))}
                </Swiper>
              </div>
            </div>
          </section>
        )}
      </>
    </div>
  );
};

export default ApplyLoan;
