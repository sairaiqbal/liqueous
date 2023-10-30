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
let selectedPlanIndex = -1;


const ChartForm: React.FC<LoadingErrorProps> = ({ params }) => {
  const [error, setError] = useState<string | null>(null);
  const [confirm, setConfirm] = useState(false);
  const [response, setResponse] = useState({ id: "", plans: [] });
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(-1);
  const [proceed, setProceed] = useState(false);
  const pathname = usePathname();
  const [dialog, setDialog] = useState(false);
  const [id, setId] = useState("");
  const [user, setUser] = useState({});
  const [loadingSheet, setLoadingSheet] = useState(false);
  const fadeDiv = useRef<HTMLDivElement | null>(null);
  const [optionLookingFor, setOptionLookingFor] = useState("");
  //   const option_looking_for = pathname.split("/").at(4);
  //    console.log(option_looking_for);
  const toggleTitleVisibility = (index: number) => {
    if (selectedPlanIndex === index) {
      setSelectedPlanIndex(-1); // If the same SVG is clicked again, hide the title
    } else {
      setSelectedPlanIndex(index); // Show the title for the clicked SVG
    }
  };

  const downloadTermSheet = async () => {
    setLoadingSheet(true);
    if (fadeDiv.current) {
      fadeDiv.current.style.opacity = "0.3";
    }
    try {
      const pdfRes = await generate_term_sheet(id, optionLookingFor);
      // console.log("final response: ", pdfRes);

      const url = pdfRes.pdf_file_url;
      window.open(url, "_blank");
      setLoadingSheet(false);
      if (fadeDiv.current) {
        fadeDiv.current.style.opacity = "";
      }
    } catch (error) {
      // Handle error here
      console.error("Error:", error);
      setLoadingSheet(false);
      if (fadeDiv.current) {
        fadeDiv.current.style.opacity = "";
      }
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
    console.log("final response: ", apiRes);
    setProceed(false);
    setDialog(true);
  };

  return (
    <div>
      {!confirm ? (
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
                    the lowest rates on the market. Simply fill out the form,
                    get your quote, and apply to receive your funds in less than
                    a week!
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
      ) : (
        <>
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
        </>
      )}
      {dialog && (
        <div className="fixed z-10 inset-0 ">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="flex items-center justify-center min-h-screen ">
            <div
              className="modal-dialog lg:w-1/2 w-[95%] z-20   "
              style={{ marginTop: "80px" }}
            >
              <div className="modal-content bg-white py-4 pb-8   rounded-3xl">
                <div className="sticky top-0 px-2 h-[70vh] overflow-y-scroll lg:overflow-y-hidden">
                  <div className="flex justify-center">
                    <div className="heading text-center mt-8 w-[85%]">
                      <p className="font-bold text-2xl mb-2">Congratulations</p>
                      <h4>
                        Choose Any{" "}
                        <span className="text-primary">Three Options</span>
                      </h4>
                    </div>
                    <div className="w-[15%] flex justify-center items-start pt-8">
                      <button onClick={() => setDialog(!dialog)}>
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
                  </div>
                  <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 px-8">
                    <div
                      onClick={downloadTermSheet}
                      style={{ pointerEvents: loadingSheet ? "none" : "auto" }}
                      className="h-72 p-6 bg-white border border-white cursor-pointer flex justify-center items-center rounded-lg shadow-xl hover:border-primary hover:shadow-xl hover:bg-[#f7f8fc] hover:-translate-y-1 hover:scale-100 duration-300"
                    >
                      <div ref={fadeDiv} className="relative z-0">
                        <div className="flex justify-center">
                          <svg
                            width="105"
                            height="133"
                            viewBox="0 0 105 133"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M82.4286 0H0.40625V133H104.593V22.1639L82.4286 0Z"
                              fill="#E8E8E8"
                            />
                            <path
                              d="M86.8994 65.7721C85.3013 62.9238 79.7793 62.0289 77.246 61.6262C75.2492 61.3086 73.2106 61.2139 71.191 61.2156C69.6052 61.2051 68.0427 61.2832 66.5003 61.3709C65.9318 61.4091 65.369 61.4582 64.8066 61.5069C64.2302 60.9103 63.6731 60.294 63.1339 59.6636C59.7035 55.6028 56.9337 50.9976 54.6768 46.2122C55.276 43.8999 55.7555 41.4868 56.045 38.9807C56.5736 34.4066 56.7552 29.1939 55.0413 24.8331C54.4495 23.328 52.8716 21.4957 51.0511 22.4081C48.9582 23.4574 48.3696 26.4303 48.1989 28.5377C48.0616 30.241 48.1577 31.9488 48.4437 33.6236C48.735 35.3099 49.2039 36.911 49.7145 38.51C50.1909 39.976 50.716 41.4307 51.2885 42.8717C50.9253 44.0061 50.5397 45.1208 50.1348 46.2069C49.1907 48.6823 48.17 51.0341 47.1882 53.2963C46.6706 54.418 46.1639 55.516 45.6682 56.5894C44.0995 60.0352 42.3966 63.4178 40.4853 66.6876C36.0271 68.2603 32.0264 70.0834 28.7039 72.2259C26.9216 73.3774 25.3472 74.628 24.036 75.9997C22.7981 77.2947 21.54 78.9753 21.4298 80.8357C21.368 81.8858 21.7839 82.9049 22.6441 83.5278C23.8272 84.4117 25.395 84.3529 26.7676 84.0652C31.264 83.122 34.7168 79.2569 37.6572 75.9993C39.6825 73.7555 41.9878 70.9063 44.3991 67.4606C44.4044 67.4527 44.4097 67.4448 44.4154 67.4369C48.5512 66.1546 53.0524 65.072 57.8295 64.2762C60.0119 63.9143 62.2522 63.6182 64.5372 63.4103C66.1441 64.9154 67.8804 66.2858 69.7745 67.4303C71.2498 68.3379 72.8189 69.1043 74.4613 69.6758C76.1221 70.2185 77.793 70.6615 79.5183 70.9419C80.3895 71.0664 81.2805 71.123 82.1907 71.0888C84.2222 71.012 87.138 70.233 87.3293 67.7681C87.3881 67.0136 87.2253 66.352 86.8994 65.7721ZM38.2643 70.2948C37.3128 71.7688 36.3951 73.0944 35.5305 74.2608C33.413 77.142 30.9946 80.5641 27.4932 81.8437C26.8281 82.0868 25.9525 82.3377 25.0296 82.2833C24.2075 82.235 23.3968 81.8722 23.4341 80.9387C23.4526 80.4501 23.6916 79.8267 24.0584 79.2143C24.4598 78.5427 24.9568 77.9268 25.495 77.3605C26.6483 76.1489 28.1064 74.9746 29.7839 73.8871C32.3567 72.218 35.4283 70.7155 38.8521 69.3749C38.6552 69.6864 38.4586 69.9961 38.2643 70.2948ZM50.2058 33.3323C49.9417 31.7908 49.9018 30.2279 50.0641 28.725C50.1449 27.9735 50.2979 27.2401 50.5195 26.5527C50.7072 25.9692 51.1126 24.5453 51.7592 24.3624C52.8251 24.0606 53.1528 26.3491 53.2735 26.9966C53.9604 30.6797 53.3551 34.7756 52.5308 38.3885C52.3996 38.9631 52.2535 39.5286 52.104 40.0918C51.8487 39.3895 51.6052 38.685 51.381 37.977C50.8985 36.4307 50.4572 34.8664 50.2058 33.3323ZM57.5242 62.4075C53.5191 63.0567 49.7093 63.9073 46.1279 64.9114C46.5592 64.7908 48.5297 61.0564 48.9692 60.2813C51.0402 56.6337 52.7343 52.8054 53.9516 48.7894C56.1011 53.0405 58.7099 57.1075 61.9149 60.7274C62.2101 61.056 62.5101 61.3806 62.8154 61.7012C61.0195 61.8947 59.2521 62.1303 57.5242 62.4075ZM84.6095 67.5373C84.463 68.3291 82.7719 68.7818 81.9828 68.9064C79.6508 69.2732 77.1837 68.9797 74.9517 68.23C73.4203 67.7159 71.9433 67.0157 70.54 66.1735C69.145 65.3308 67.84 64.3394 66.62 63.2462C68.1243 63.1559 69.6469 63.0966 71.177 63.1256C72.7071 63.141 74.249 63.2182 75.7721 63.4169C78.6283 63.7354 81.8288 64.7158 84.077 66.5692C84.5196 66.9346 84.6609 67.2575 84.6095 67.5373Z"
                              fill="#5C96FD"
                            />
                            <path
                              d="M85.8586 11.0822H0.40625V0H82.4286L85.8586 11.0822Z"
                              fill="#5C96FD"
                            />
                            <path
                              d="M41.6413 105.787C41.6413 108.139 40.9482 109.955 39.5611 111.236C38.174 112.517 36.2044 113.157 33.6513 113.157H32.0532V120.14H26.3672V99.0928H33.6518C36.3101 99.0928 38.3065 99.6736 39.6405 100.835C40.9745 101.996 41.6413 103.647 41.6413 105.787ZM32.0537 108.522H33.0903C33.9444 108.522 34.6234 108.283 35.1275 107.802C35.6315 107.322 35.8833 106.66 35.8833 105.815C35.8833 104.395 35.0963 103.685 33.5224 103.685H32.0537V108.522Z"
                              fill="#A4A9AD"
                            />
                            <path
                              d="M62.8619 109.17C62.8619 112.682 61.8946 115.389 59.9609 117.289C58.0273 119.19 55.3084 120.14 51.8056 120.14H44.9961V99.0928H52.2807C55.6589 99.0928 58.2668 99.9565 60.1048 101.684C61.9424 103.411 62.8619 105.907 62.8619 109.17ZM56.9595 109.372C56.9595 107.442 56.5779 106.013 55.8151 105.082C55.0522 104.151 53.8932 103.685 52.3381 103.685H50.683V115.475H51.9499C53.6778 115.475 54.9443 114.974 55.7506 113.971C56.5564 112.968 56.9595 111.435 56.9595 109.372Z"
                              fill="#A4A9AD"
                            />
                            <path
                              d="M72.2329 120.14H66.6328V99.0928H79.0713V103.656H72.2329V107.673H78.5384V112.236H72.2329V120.14Z"
                              fill="#A4A9AD"
                            />
                            <path
                              d="M82.4277 22.1639H104.592L82.4277 0V22.1639Z"
                              fill="#D1D3D3"
                            />
                          </svg>
                        </div>
                        <div className="mt-4">
                          <p className="text-black text-lg font-bold hover:text-primary">
                            PDF Term Sheet
                          </p>
                        </div>
                      </div>
                      <div className="absolute z-10">
                        {loadingSheet && (
                          <svg
                            aria-hidden="true"
                            role="status"
                            className="inline w-10 h-10 mr-3 text-white animate-spin"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="#5c96fd"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentColor"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    {!user ? (
                      <div
                        style={{
                          pointerEvents: loadingSheet ? "none" : "auto",
                        }}
                      >
                        <Link
                          href={`/create-account/${optionLookingFor}/${id}`}
                        >
                          <div className="h-72 p-6 bg-white border border-white flex justify-center items-center rounded-lg shadow-xl hover:border-primary hover:shadow-xl hover:bg-[#f7f8fc] hover:-translate-y-1 hover:scale-100 duration-300">
                            <div>
                              <div className="flex justify-center ">
                                <svg
                                  width="133"
                                  height="133"
                                  viewBox="0 0 133 133"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                  <rect
                                    width="133"
                                    height="133"
                                    fill="url(#pattern0)"
                                  />
                                  <defs>
                                    <pattern
                                      id="pattern0"
                                      patternContentUnits="objectBoundingBox"
                                      width="1"
                                      height="1"
                                    >
                                      <use
                                        xlinkHref="#image0_3293_3346"
                                        transform="scale(0.01)"
                                      />
                                    </pattern>
                                    <image
                                      id="image0_3293_3346"
                                      width="100"
                                      height="100"
                                      xlinkHref="data:image/png;base64,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"
                                    />
                                  </defs>
                                </svg>
                              </div>
                              <div className="mt-4">
                                <p className="text-black text-lg font-bold hover:text-primary">
                                  Create An Account
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ) : (
                      <div
                        style={{
                          pointerEvents: loadingSheet ? "none" : "auto",
                        }}
                      >
                        <Link href="https://portal.liqueous.com">
                          <div className="h-72 p-6 bg-white border border-white flex justify-center items-center rounded-lg shadow-xl hover:border-primary hover:shadow-xl hover:bg-[#f7f8fc] hover:-translate-y-1 hover:scale-100 duration-300">
                            <div>
                              <div className="flex justify-center ">
                                <svg
                                  width="133"
                                  height="133"
                                  viewBox="0 0 133 133"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                  <rect
                                    width="133"
                                    height="133"
                                    fill="url(#pattern0)"
                                  />
                                  <defs>
                                    <pattern
                                      id="pattern0"
                                      patternContentUnits="objectBoundingBox"
                                      width="1"
                                      height="1"
                                    >
                                      <use
                                        xlinkHref="#image0_3293_3346"
                                        transform="scale(0.01)"
                                      />
                                    </pattern>
                                    <image
                                      id="image0_3293_3346"
                                      width="100"
                                      height="100"
                                      xlinkHref="data:image/png;base64,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"
                                    />
                                  </defs>
                                </svg>
                              </div>
                              <div className="mt-4">
                                <p className="text-black text-center text-lg font-bold hover:text-primary">
                                  Sign In
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )}
                    <div
                      style={{
                        pointerEvents: loadingSheet ? "none" : "auto",
                      }}
                    >
                      <Link
                        href="https://calendly.com/jacobfernane"
                        target="_blank"
                      >
                        <div
                          style={{
                            pointerEvents: loadingSheet ? "none" : "auto",
                          }}
                          className="h-72 p-6 bg-white border border-white cursor-pointer flex justify-center items-center rounded-lg shadow-xl hover:border-primary  hover:shadow-xl hover:bg-[#f7f8fc] hover:-translate-y-1 hover:scale-100 duration-300"
                        >
                          <div>
                            <div className="flex justify-center">
                              <svg
                                width="133"
                                height="133"
                                viewBox="0 0 133 133"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <rect
                                  width="133"
                                  height="133"
                                  fill="url(#pattern1)"
                                />
                                <defs>
                                  <pattern
                                    id="pattern1"
                                    patternContentUnits="objectBoundingBox"
                                    width="1"
                                    height="1"
                                  >
                                    <use
                                      xlinkHref="#image0_3293_3351"
                                      transform="scale(0.0104167)"
                                    />
                                  </pattern>
                                  <image
                                    id="image0_3293_3351"
                                    width="96"
                                    height="96"
                                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADiUlEQVR4nO1dTU/UUBTtBv8BCUZXBIyCf0F+BW5sdWlCWPG1Exe4VHAm0hqXYglRg0zCBlDQxYxCMs5biJkH08RfQKJgNIaWa14nY0SEgaHvY+g5ydmV5J577rv39TYZLAsAAAAAAACQjNm3qxfnlvMv55YL2zFXCrPz7z506kq8afFIF5tbyW/lVgq0n/mt+TfvL6Q9HukQlXZQbKHG52mPRzrEET9ccP5r2uORjiOqjQTTHk/qBOcMi+fEuDVJ3Y4bPbS9cN32wu+OF9FRrCfYqfP3SfO08QjNVe3RhP2YupQl/voLOme70SPHDUOVgh3DDNhHNwxtN8refkIt8pPvRa+1C/YMM6B2KtxoSaoJceU3EFhvtr7g3qy65EuOJyOx55+s7QjecCNqH6S6gtsHKH5WdvLlxxPu3nTpSuIGCGcbEXxtbI9a++oLbu0j6hnbk26AonjGkzfADT83EkzHEB1bcMcQSTdARTy2G35K3gAv3GkkmLb+4wtu65dvgIp4bDfclmDA6QTPLK0eKnZmcTV+5rxCA2THY4wBtSN/9xk/VPDoFFfegmTHY4wBPfeqQ+/qyA+aXlg7IHZ6YY26R34qG8Kq4jHGgPjaN1CtukuDv+jO0434+AuOTvE/YuNr36Tc5KuMxxgDBMVLTU30/9g+QMpfxGTHY5QBceVNRvGRFn1VDELBzuHqMVdR+arjMc6AtNGCAREM0F2FDk6A/kQ4aEH6k+FoIGaAd8YMYDwgMDh2DmAA11swMIDDgFS3LAszIIABuquQ4QToTwRDC9KfDKaBxs2AjP/qSDLDn4cBPgzACeBoQYQWhBlAGMI+hjBuQRzXUMI11IAXHmYojXsRSxstGBDAAN1VyHACzN3tZLALggHYhvrYhhJaEL4HEL4H+BjC+CLm44sY4RqKVQRhFcH1v8ViF8Sbn1jGcRhg9FDNYBcEA7AL8rELIrQg7IIIuyAfQxi7IB+7IMI1FLsgwpsw179GwCqC608gdkG8uZn4Mq7Eg23dolizsBx8k2HAunZhvDlY4pXkf7q4VA4mdAtjzcP7yRuwudnFypXQAHFkOHeL/MtlSwYYr2QNEEgmU3QKSxaKxWIL45Ul3SKZoSzxYFHkSJoBf5mQEUdNt2BmDndF5UtP/r8zoVQOxsXEL/FgJ4XVviO0Mx48+Lixkfy/LAEAAAAAAAAAAAAAAACss4bfyP1RJO4v9LMAAAAASUVORK5CYII="
                                  />
                                </defs>
                              </svg>
                            </div>
                            <div className="mt-4">
                              <p className="text-black text-lg font-bold hover:text-primary text-center">
                                Get Help
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-32 w-32"
                      width="160"
                      height="167"
                      viewBox="0 0 160 167"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M34.9296 125.125C43.1357 133.331 53.591 138.919 64.9732 141.183C76.3554 143.447 88.1534 142.285 98.8752 137.844C109.597 133.403 118.761 125.882 125.209 116.233C131.656 106.584 135.097 95.239 135.097 83.6338C135.097 72.0286 131.656 60.684 125.209 51.0346C118.761 41.3852 109.597 33.8644 98.8752 29.4233C88.1534 24.9822 76.3554 23.8202 64.9732 26.0843C53.591 28.3483 43.1357 33.9368 34.9296 42.1429C29.4808 47.5915 25.1586 54.06 22.2097 61.179C19.2609 68.298 17.7431 75.9282 17.7431 83.6338C17.7431 91.3394 19.2609 98.9696 22.2097 106.089C25.1586 113.208 29.4808 119.676 34.9296 125.125Z"
                        fill="#5C96FD"
                        fill-opacity="0.5"
                      />
                      <path
                        d="M132.179 68.4304C135.057 78.3869 135.215 88.9324 132.638 98.9708C130.06 109.009 124.841 118.174 117.523 125.513C94.825 148.211 57.8448 148.04 34.9296 125.125C12.0144 102.21 11.8411 65.2314 34.5414 42.5312L76.0323 84.0221L132.179 68.4304Z"
                        fill="#5C96FD"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChartForm;
