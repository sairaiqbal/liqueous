"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { countries } from "@/app/Utils/countries";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface SearchResults {
  code: number;
  name: string;
  exchange: string;
  exchange_code: string;
  exchange_name: string;
  country: string;
  currency: string;
  stock_type: string;
  code_exchange: string;
}

const GetEstimate = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);
  const [searchResults, setSearchResults] = useState<SearchResults[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [searchInput, setSearchInput] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const { handleSubmit, register, control, formState, setValue, getValues } =
    useForm({
      mode: "onChange",
    });
  const { isValid, errors } = formState;
  const route = usePathname();
  const option_looking_for = route.split("/").at(2);
  const router = useRouter();
    // console.log("Transaction type" , option_looking_for.split("/").at(2));

  const handleCountrySelect = (
    country: React.SetStateAction<{
      dial_code: string;
      flag: string;
      prefix: string;
      name: string;
    }>
  ) => {
    setSelectedCountry(country);
    setShowDialog(false);
  };

  const onSubmit = (data: any) => {
    const ticker = data?.stock;
    const phone = selectedCountry.dial_code + data.phone;
    if (ticker && ticker !== "") {
      const queryParams = new URLSearchParams({
        name: data.name || "",
        email: data.email || "",
        //   dialCode: data.dialCode || "",
        phoneNo: phone,
        notes: data.notes || "",
      }).toString();

      let url = `/quote/US/${ticker}`;

      if (
        option_looking_for === "Financing" ||
        option_looking_for === "Sale" ||
        option_looking_for === "EquityLine"
      ) {
        url += `/${option_looking_for}`;
      }

      // Construct the full URL with query parameters
      const fullUrl = `${url}?${queryParams}`;

      router.push(fullUrl);
    }
  };

  const fetchData = async (value: any) => {
    if (value) {
      const response = await fetch(`/api/quote/tickers?search=${value}`);
      const data = await response.json();

      setSearchResults(data.data);
      setIsDropdownOpen(true);
    } else {
      setSearchResults([]);
    }
  };

  const handleSelectResult = (result: any) => {
    setSelectedResult(result);
    setInputValue(result.code);
    setValue("stock", result.code);
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <div className="overflow-x-hidden  bg-white dark:bg-gray-dark">
        <div className="overflow-hidden  sm:-mx-[250px]  lg:-mx-[150px] lg:mb-[100px] pb-4">
          <div className="container lg:my-[50px]">
            <div className="heading text-center my-4">
              <h4 className="font-bold">
                Get An <span className="text-primary"> Estimate </span>
              </h4>

              <p>
                Simply submit the requested info below, and you will get an
                estimate of{" "}
              </p>
              <p>the maximum loan amount available.</p>
            </div>
          </div>
          <div className="relative container ">
            <div className="absolute top-0 left-0 z-0 w-full  ">
              <div className="container  h-[40rem]  bg-gradient-to-r to-transparent rounded-3xl lg:py-[50px] flex justify-around">
                <div className="flex h-full w-full justify-between ">
                  <div className="h-full w-36 relative  left-[7%] flex items-end  ">
                    <img src="/assets/images/Graphic - Left.png" />
                  </div>
                  <div className="h-full w-36 relative  left-[-7%] flex items-start  ">
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
            <div className="relative container  flex justify-center z-10 pt-10">
              <div className="lg:w-3/4 bg-white px-4 py-12 dark:bg-[#101626] lg:px-8 rounded-3xl shadow-lg ">
                <form id="estimateForm" onSubmit={handleSubmit(onSubmit)}>
                  <div className="heading mb-0 ">
                    <h2 className="text-2xl font-extrabold text-black dark:text-white">
                      Please complete all fields below
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
                    <div className="relative">
                      <label
                        className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                        htmlFor="name"
                      >
                        Full Name
                      </label>

                      <input
                        id="name"
                        type="text"
                        {...register("name", {
                          required: "Name is required",
                        })}
                        className="block w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                      />
                      <svg
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-2/3 -translate-y-1/2 right-4 rtl:left-4 dark:text-white"
                      >
                        <path
                          d="M5.42855 5.57875C5.42855 8.10348 7.47525 10.1502 9.99998 10.1502C12.5247 10.1502 14.5714 8.10348 14.5714 5.57875C14.5714 3.05402 12.5247 1.00732 9.99998 1.00732"
                          stroke="currentColor"
                          stroke-width="1.8"
                          stroke-linecap="round"
                        />
                        <path
                          d="M2 16.9328C2 15.9495 2.61812 15.0724 3.5441 14.7417V14.7417C7.71891 13.2507 12.2811 13.2507 16.4559 14.7417V14.7417C17.3819 15.0724 18 15.9495 18 16.9328V18.7014C18 19.9185 16.922 20.8535 15.7172 20.6813L13.8184 20.4101C11.2856 20.0483 8.71435 20.0483 6.18162 20.4101L4.28284 20.6813C3.07798 20.8535 2 19.9185 2 18.7014V16.9328Z"
                          stroke="currentColor"
                          stroke-width="1.8"
                        />
                      </svg>
                    </div>
                    <div className="relative">
                      <label
                        className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                        htmlFor="stock"
                      >
                        Stock Symbol
                      </label>

                      <input
                        id="stock"
                        type="text"
                        autoComplete="none"
                        {...register("stock", {
                          required: "Stock is required",
                        })}
                        value={inputValue}
                        onChange={(e) => {
                          setInputValue(e.target.value);
                          fetchData(e.target.value); // Call fetchData on input change
                        }}
                        className="block w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                      />
                      {isDropdownOpen && (
                        <div className="absolute top-18 z-10 w-full text-black font-bold outline-none dark:bg-gray-dark max-h-60 overflow-auto">
                          <ul className="py-1">
                            {searchResults.map((result, index) => (
                              <li
                                key={index}
                                className="px-4 py-2 mb-1 rounded-sm text-left cursor-pointer bg-white text-black hover:text-primary"
                                onClick={() => handleSelectResult(result)}
                              >
                                <div className="flex justify-between ">
                                  <span className="font-bold min-w-[150px]">
                                    {result.exchange_code}
                                  </span>
                                  <span className="font-thin whitespace-nowrap text-clip overflow-hidden">
                                    {result.name}
                                  </span>
                                </div>
                                <div className="flex justify-between ">
                                  <div className="font-thin text-sm"></div>
                                  <span className="font-thin italic text-sm">
                                    {result.exchange_name}
                                  </span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="relative">
                      <label
                        className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                        htmlFor="email"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                        })}
                        className={`block w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12 border-${
                          errors.email ? "#DC2828" : ""
                        }}`}
                      />
                      <svg
                        width="22"
                        height="21"
                        viewBox="0 0 22 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-2/3 -translate-y-1/2 right-4 rtl:left-4 dark:text-white"
                      >
                        <path
                          d="M1 8.00732V7.00732C1 4.2459 3.23858 2.00732 6 2.00732H16C18.7614 2.00732 21 4.2459 21 7.00732V13.0073C21 15.7687 18.7614 18.0073 16 18.0073H6C3.23858 18.0073 1 15.7687 1 13.0073V12.0073"
                          stroke="currentColor"
                          stroke-width="1.8"
                          stroke-linecap="round"
                        />
                        <path
                          d="M5 7.00732L9.8 10.6073C10.5111 11.1407 11.4889 11.1407 12.2 10.6073L17 7.00732"
                          stroke="currentColor"
                          stroke-width="1.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="relative ">
                      <label
                        className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                        htmlFor="phone"
                      >
                        Mobile Number
                      </label>
                      <div className="flex gap-2 justify-around">
                        <input
                          type="hidden"
                          // {...register("dial_code")}
                          value={selectedCountry.dial_code}
                        />
                        <button
                          onClick={() => setShowDialog(!showDialog)}
                          className="w-[150px] rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary"
                        >
                          {selectedCountry.flag} {selectedCountry.dial_code}
                        </button>

                        <input
                          {...register("phone", {
                            required: "phone is required",
                          })}
                          type="text"
                          required
                          className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                        />
                      </div>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-2/3 -translate-y-1/2 right-4 rtl:left-4 dark:text-white"
                      >
                        <path
                          d="M6.45241 1.40806C5.45292 0.783702 4.14202 0.887138 3.2983 1.73086L1.86856 3.1606C-0.302899 5.33207 1.73747 10.8931 6.42586 15.5815C11.1142 20.2699 16.6753 22.3102 18.8467 20.1388L20.2765 18.709C21.2635 17.722 21.2374 16.0956 20.2182 15.0764L18.0036 12.8619C16.9844 11.8426 15.358 11.8165 14.371 12.8036L14.0639 13.1107C13.531 13.6436 12.6713 13.6957 12.0713 13.2005C11.4925 12.7229 10.9159 12.208 10.3576 11.6497C9.79933 11.0914 9.28441 10.5149 8.80678 9.93607C8.31161 9.33601 8.36374 8.47631 8.89666 7.9434L9.20375 7.63631C9.98187 6.85819 10.1303 5.68271 9.65898 4.72062"
                          stroke="currentColor"
                          stroke-width="1.8"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                    {showDialog && (
                      <div className="modal fixed z-10 inset-0">
                        <div className="fixed inset-0 bg-black opacity-50"></div>
                        <div className="flex items-center justify-center min-h-screen">
                          <div className="modal-dialog w-[24rem] z-20">
                            <div className="modal-content bg-white p-4 pb-0 max-h-[26rem] rounded-lg">
                              <div className="sticky top-0 px-2">
                                <div className="flex justify-between mb-4">
                                  <div className="">
                                    <h2 className="  text-black font-bold text-xl ">
                                      Select Area Code
                                    </h2>
                                  </div>

                                  <div className="flex justify-end">
                                    <button
                                      onClick={() => setShowDialog(!showDialog)}
                                      className=""
                                    >
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
                                <div className="mb-4">
                                  <input
                                    type="text"
                                    placeholder="Search country..."
                                    className="border border-gray/20 rounded-md py-2 px-4 w-full"
                                    value={searchInput}
                                    onChange={(e) =>
                                      setSearchInput(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="max-h-[16rem] overflow-y-auto">
                                <ul>
                                  {filteredCountries.map((country) => (
                                    <div
                                      key={country.prefix}
                                      className="cursor-pointer px-2 py-2 hover:bg-[#BBBBBB] text-black flex justify-between "
                                      onClick={() =>
                                        handleCountrySelect(country)
                                      }
                                    >
                                      {country.flag} {country.dial_code}{" "}
                                      {country.name}
                                    </div>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1 ">
                    <div className="relative w-full">
                      <label
                        className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                        htmlFor="notes"
                      >
                        Notes
                      </label>
                      <textarea
                        {...register("notes")}
                        className="block w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary pr-12 rtl:pl-12"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex  mt-6">
                    <input
                      type="checkbox"
                      {...register("certify_check", {
                        required: "Check this certificate to continue",
                      })}
                      className="w-6 h-6 pt-1 text-black bg-gray-300 border-none rounded-md focus:ring-transparent "
                    />
                    <label
                      htmlFor="safeAdress"
                      className="block ml-2 text-sm text-black dark:text-gray"
                    >
                      I hereby certify that the information provided in this
                      form is complete, true and correct to the best of my
                      knowledge.
                    </label>
                  </div>
                  <div className="my-6 flex justify-center text-center ltr:lg:text-right rtl:lg:text-left">
                    <button
                      type="submit"
                      className="lg:w-1/3 w-full  btn bg-primary capitalize text-white p-3 dark:bg-primary dark:text-white dark:hover:bg-primary rounded-full disabled:bg-gray"
                      disabled={
                        !isValid || getValues("certify_check")?.value === false
                      }
                    >
                      GET ESTIMATE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetEstimate;
