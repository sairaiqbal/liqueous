"use client";

import { usePathname } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { countries } from "@/app/Utils/countries";
import { useState, useEffect } from "react";
import requestLoan from "@/app/Utils/requestLoan";
import estimateLoan from "@/app/Utils/estimateLoan";
import confirmShares from "@/app/Utils/confirmShares";
import { useRouter, useSearchParams } from "next/navigation";
import confirmEquityLine from "@/app/Utils/confirmEquityLine";

interface ApiResponse {
  min_val: number;
  id: string;
  max_val: number;
  step: number;
}
interface QuoteFormProps {
  setConfirm: (value: boolean) => void;
  setResponse: (value: { id: string; plans: []; user_exists: "" }) => void;
  setId: (value: string) => void;
  setOptionLookingFor: (value: string) => void;

  // Define the type of setConfirm prop
}
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

const QuoteForm: React.FC<QuoteFormProps> = ({
  setConfirm,
  setResponse,
  setId,
  setOptionLookingFor,
}) => {
  const pathname = usePathname();
  const [showForm, setShowForm] = useState(true);
  const pathnameParts = pathname.split("/");
  const exchange = pathnameParts[2];
  const ticker = pathnameParts[3];
  const [inputValue, setInputValue] = useState(ticker || "");
  const [selectedResult, setSelectedResult] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResults[]>([]);
  const router = useRouter();
  const [queryParams, setQueryParams] = useState(false);
  const [whoDefaultValue, setWhoDefaultValue] = useState("my self");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showDialog, setShowDialog] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [res, setRes] = useState<ApiResponse | null>(null);
  const [estimateValue, setEstimateValue] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [radioSelected, setRadioSelected] = useState(false);
  const [showAgentFee, setShowAgentFee] = useState(false);
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const { handleSubmit, register, control, formState, setValue, getValues } =
    useForm({
      mode: "onChange",
    });
  const { isSubmitting, isValid, isDirty } = formState;

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

  const handleRadioSelect = () => {
    setRadioSelected(true);
    //     if(pathnameParts[4]){
    // setRadioSelected(false);
    //     }
  };

  const searchParams = useSearchParams();
  useEffect(() => {
    setValue("stock", ticker || "");
    const name = searchParams.get("name");
    // console.log(pathnameParts[4]);
    // console.log("name is ", name);
    if (name != null || name != undefined) {
      setQueryParams(true);
    }
  }, [ticker]);

  const onSubmit = async (data: any) => {
    // console.log("form dataaaa" , data);
    setOptionLookingFor(getValues("option_looking_for") || pathnameParts[4]);
    let agentFee = 0;
    const name = searchParams.getAll("name");
    const email = searchParams.getAll("email");
    const phone = searchParams.getAll("phoneNo");
    // if (data.who === "for someone else") {
    //   agentFee = data.agent_fee;
    // }
    if (showForm) {
      if (queryParams && pathnameParts[4]) {
        //
        console.log(
          "if statment , that includes transaction type and query params "
        );
        console.log("if statement data object:", data);
        const formData = {
          ...data,
          exchange: exchange,
          name: name[0],
          email: email[0],
          phone: phone[0],
          option_looking_for: pathnameParts[4],
        };
        const apiRes = await requestLoan(formData);
        setShowForm(false);
        setRes(apiRes);
        if (data.option_looking_for !== "EquityLine") {
          console.log("option", data.option_looking_for);
          const estimateRes = await estimateLoan(apiRes.id, apiRes.min_val);
          setEstimateValue(estimateRes.estimated_loan);
          // console.log("2nd form estimate" , estimateValue);
          setValue("estimated_loan", estimateRes.estimated_loan);
        }
      } else if (queryParams) {
        delete data.who;
        console.log(
          "else if ,  that doesn't include transaction type but query params "
        );

        // console.log("dataaaaaa" , data);
        const formData = {
          ...data,
          exchange: exchange,
          name: name[0],
          email: email[0],
          phone: phone[0],
          option_looking_for: data.option_looking_for,
        };
        const apiRes = await requestLoan(formData);
        setShowForm(false);
        setRes(apiRes);
        const estimateRes = await estimateLoan(apiRes.id, apiRes.min_val);
        setEstimateValue(estimateRes.estimated_loan);
        setValue("estimated_loan", estimateRes.estimated_loan);
      } else {
        const phoneNumber = `${selectedCountry.dial_code}${data.phone}`;
        // console.log(data);
        console.log("else statement");
        const formData = {
          ...data,
          exchange: exchange,
          phone: phoneNumber,
          option_looking_for: data.option_looking_for || pathnameParts[4],
        };
        const apiRes = await requestLoan(formData);
        setShowForm(false);
        setRes(apiRes);
        if (data.option_looking_for || pathnameParts[4] !== "EquityLine") {
          const estimateRes = await estimateLoan(apiRes.id, apiRes.min_val);

          const formatShares = estimateRes.estimated_loan;
          console.log(new Intl.NumberFormat("en-US").format(formatShares));
          const shares = new Intl.NumberFormat("en-US").format(formatShares);
          setEstimateValue(shares);
          setValue("estimated_loan", shares);
        
      }
    
        const elementToScrollTo = document.getElementById("applyLoanForm");
        if (elementToScrollTo) {
          elementToScrollTo.scrollIntoView({ behavior: "smooth" });
        }
       
      }
      // const apiRes = await requestLoan(formData);
      // setShowForm(false);
      // setRes(apiRes);

      // const estimateRes = await estimateLoan(apiRes.id, apiRes.min_val);
      // setEstimateValue(estimateRes.estimated_loan);
      // setValue("estimated_loan", estimateRes.estimated_loan);
    } else {
      if (data.who === "for someone else") {
        agentFee = data.agent_fee;
      }
      if (data.option_looking_for || pathnameParts[4] !== "EquityLine") {
        const formData = {
          estimated_loan: data.estimated_loan,
          requested_shares: data.requested_shares.toString(),
          who: data.who,
          agent_fee: agentFee,
          id: res?.id,
        };
        console.log("who is ", formData);
        const apiRess = await confirmShares(formData);
        setConfirm(true);
        setResponse(apiRess);
        // console.log("Form 2 data :",apiRess);
        setId(apiRess.id);
      } else {
        const formData = {
          who: data.who,
          agent_fee: agentFee,
          id: res?.id,
          option_looking_for: data.option_looking_for,
          stock: data.stock,
        };
        console.log("who is ", formData);
        const apiRess = await confirmEquityLine(formData);
        setConfirm(false);
        setResponse(apiRess);
        console.log("equi", apiRess.user_exists == "false" ? "nu" : "ou");
        router.push(
          `/congratulations/${apiRess.user_exists == "false" ? "nu" : "ou"}/${
            pathnameParts[4]
          }/${formData.id}`
        );
        // console.log("Form 2 data :",apiRess);
        setId(apiRess.id);
      }
    }
  };

  const handleSliderChange = (value: number) => {
    setValue("requested_shares", value);
    setSliderValue(value);
    estimateLoan(res?.id || "", value + "")
      .then((response) => {
        const formatShares = response.estimated_loan;
        const shares = new Intl.NumberFormat("en-US").format(formatShares);
        // setEstimateValue(shares);
        setValue("estimated_loan", shares); // Assuming the response contains the value
      })
      .catch((error) => {
        setEstimateValue("Error"); // Handle the error appropriately
      });
  };

  useEffect(() => {
    setValue("who", whoDefaultValue);
  }, [setValue, whoDefaultValue]);

  const handleWhoChange = (e: { target: { value: string } }) => {
    setShowAgentFee(e.target.value === "for someone else");
    console.log("value", e.target.value);
    setValue("who", e.target.value);
    setWhoDefaultValue(e.target.value);
  };

  const fetchData = async (value: any) => {
    if (value) {
      const response = await fetch(`/api/quote/tickers?search=${value}`);
      const data = await response.json();

      setSearchResults(data.data); // Update search results with fetched data
      setIsDropdownOpen(true); // Open the dropdown
    } else {
      setSearchResults([]); // Clear search results when input is empty
    }
  };

  const handleSelectResult = (result: any) => {
    setSelectedResult(result);
    setInputValue(result.code);
    setValue("stock", result.code);
    setIsDropdownOpen(false);
    // Get the current route and split it into segments
    const url = router.replace("/quote/US/" + getValues("stock"));
    console.log(url);
  };

  return (
    <>
      {/* {cards !== true && cards} */}
      <section id="applyLoanForm" className=" lg:w-1/3 w-full  py-8 dark:bg-none">
        <div  className="container">
          <div className="relative z-10">
            <div className="relative flex lg:justify-start justify-center z-10 ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                // action={handleSubmit}
                className="rounded-3xl bg-white px-8 py-12 dark:bg-gray-dark  w-11/12 mt-10 shadow-lg"
              >
                {showForm ? (
                  <>
                    <h3 className="font-bold text-black text-center mb-4 text-lg px-4">
                      Get your free quote and tap into your capital today!
                    </h3>

                    <div className="">
                      <div className="relative mb-6">
                        <label
                          className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                          htmlFor="stock"
                        >
                          Company Symbol{" "}
                        </label>
                        <Controller
                          name="stock"
                          control={control}
                          // defaultValue={ticker || ""}
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              name="stock"
                              autoComplete="none"
                              //  value={ticker || ""}
                              value={inputValue}
                              required
                              //   onFocus={onFocusTickerSearch}
                              //   onBlur={onBlurTickerSearch}
                              onChange={(e) => {
                                setInputValue(e.target.value);
                                fetchData(e.target.value); // Call fetchData on input change
                              }}
                              className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12 "
                            />
                          )}
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

                      {!queryParams && (
                        <div className="relative mb-6">
                          <label
                            className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                            htmlFor="full name"
                          >
                            Full Name
                          </label>
                              <input
                               {...register("name", { required: true })}
                                type="text"
                                autoComplete="none"
                                className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                              />
                        </div>
                      )}
                      {!queryParams && (
                        <div className="relative mb-6">
                          <label
                            className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                            htmlFor="email"
                          >
                            Email Address
                          </label>
                          
                              <input
                               {...register("email", { required: true })}
                                type="email"
                                name="email"
                                required
                                className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                              />
                           
                        </div>
                      )}
                      {!queryParams && (
                        <div className="relative mb-6">
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
                                {...register("phone", { required: true })}
                                  type="text"
                                  name="phone"
                                  required
                                  className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                />
                          </div>
                        </div>
                      )}

                      {!queryParams && (
                        <div>
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
                                            onClick={() =>
                                              setShowDialog(!showDialog)
                                            }
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
                                        {filteredCountries.map(
                                          (country, index) => (
                                            <div
                                              // key={country.prefix}
                                              key={index}
                                              className="cursor-pointer px-2 py-2 hover:bg-[#BBBBBB] text-black flex justify-between "
                                              onClick={() =>
                                                handleCountrySelect(country)
                                              }
                                            >
                                              {country.flag} {country.dial_code}{" "}
                                              {country.name}
                                            </div>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {pathnameParts[4] !== "Financing" &&
                      pathnameParts[4] !== "Sale" &&
                      pathnameParts[4] !== "EquityLine" ? (
                        <div className="relative mb-6">
                          <label
                            htmlFor="option_looking_for"
                            className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                          >
                            Transaction type?
                          </label>
                          <label className="text-black">
                            <input
                              {...register("option_looking_for")}
                              type="radio"
                              value="Financing"
                              onClick={handleRadioSelect}
                            />
                            Equity Financing (Borro)
                          </label>
                          <label className="text-black ml-4">
                            <input
                              {...register("option_looking_for")}
                              type="radio"
                              value="Sale"
                              onClick={handleRadioSelect}
                            />
                            Block Sale
                          </label>
                          <label className="text-black ml-4">
                            <input
                              {...register("option_looking_for")}
                              type="radio"
                              value="EquityLine"
                              onClick={handleRadioSelect}
                            />
                            Equity Line of Credit
                          </label>
                        </div>
                      ) : null}
                      {radioSelected || pathnameParts[4] != "EquityLine" ? (
                        <div className="relative mb-6">
                          <label
                            className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                            htmlFor="shares_total"
                          >
                            Total Number of shares you own
                          </label>
                              <input
                              {...register("shares_total", { required: true })}
                                name="shares_total"
                                type="text"
                                required
                                className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                              />
                        </div>
                      ) : null}
                    </div>
                  </>
                ) : (
                  <>
                  <button
                        className="btn btn-primary text-white"
                        type="button"
                        onClick={() => {
                            setShowForm(true);
                        }}
                      >
                        Go Back
                      </button>
                      <h3 className="font-bold text-black text-left my-4 text-lg">
                        {pathnameParts[4] !== "EquityLine" ? (
                          <span>Choose shares that suits you best</span>
                        ) : null}
                      </h3>
                    <div className="mt-10">
                      {showAgentFee && (
                        <div className="relative">
                          <label
                            htmlFor="agent_fee"
                            className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                          >
                            Origination Fee (%)
                          </label>
                         
                              <select
                                id="agent_fee"
                                required
                                className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus-border-secondary ltr:pr-12 rtl:pl-12"
                                {...register("agent_fee", )}
                              >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                              </select>
                            
                        </div>
                      )}
                      {pathnameParts[4] != "EquityLine" ? (
                        <div>
                          <div className="relative">
                            <label
                              htmlFor="amount"
                              className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                            >
                              Choose Shares
                            </label>

                            <Controller
                              name="requested_shares"
                              control={control}
                              defaultValue={0} // Set your default slider value here
                              render={({ field }) => (
                                <input
                                  type="range"
                                  min={res?.min_val || 0}
                                  max={res?.max_val || 1000}
                                  step={res?.step || 10000}
                                  // value={sliderValue}
                                  className="w-full h-2 mt-4 mb-6 bg-gray rounded-lg appearance-none cursor-pointer"
                                  {...field}
                                  onChange={(e) => {
                                    const newValue = parseInt(
                                      e.target.value,
                                      10
                                    );
                                    // setSliderValue(newValue); // Pass the new value to setSliderValue
                                    handleSliderChange(newValue); // Pass the new value to your function
                                  }}
                                />
                              )}
                            />
                            <div className="flex justify-between mt-[-16px]">
                              <div className="text-left">
                                <p>{res?.min_val.toFixed(0)}</p>
                                <p>Min Shares</p>
                              </div>
                              <div className="text-left font-bold">
                                <p>
                                  {sliderValue?.toLocaleString("en-US") ||
                                    res?.min_val}
                                </p>
                                <p>Shares</p>
                              </div>
                              <div className="text-right">
                                <p>{res?.max_val.toFixed(0)}</p>
                                <p>Max Shares</p>
                              </div>
                            </div>
                            <div className="relative mt-8">
                              <label
                                htmlFor="amount"
                                className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                              >
                                Estimated Amount ($)
                              </label>
                              <Controller
                                name="estimated_loan"
                                control={control}
                                defaultValue={""} // Set your default value here
                                render={({ field }) => (
                                  <input
                                    type="text"
                                    // value={inputValue}
                                    className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus-border-secondary ltr:pr-12 rtl:pl-12"
                                    {...field}
                                  />
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                    <div className="relative mb-6">
                      <div className="relative mt-8 p-8 bg-[#f3f3fe] rounded-3xl">
                        <label
                          htmlFor="who"
                          className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                        >
                          Are you applying for yourself or someone else?
                        </label>
                        <Controller
                          name="who"
                          control={control}
                          // defaultValue="my self" // Set the default value
                          render={({ field }) => (
                            <select
                              className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                              {...field}
                              onChange={handleWhoChange}
                              required
                            >
                              <option value="my self">Myself</option>
                              <option value="for someone else">
                                For someone else
                              </option>
                            </select>
                          )}
                        />
                      </div>
                    </div>
                    {/* <div className="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                      <div className="flex justify-center">
                        <button
                          type="button"
                          className="btn bg-primary px-12 capitalize text-white dark:bg-white dark:text-black dark:hover:bg-secondary  rounded-full"
                        >
                          Confirm
                          <svg
                            aria-hidden="true"
                            role="status"
                            className="inline w-4 h-4 mr-3 text-white animate-spin"
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
                        </button>
                      </div>
                    </div> */}
                    {/* <div className="relative mt-10  text-sm text-[red] text-left">
                        queryError
                      </div> */}
                  </>
                )}
                <div className="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className={`btn bg-primary px-12 capitalize text-white dark:bg-white dark:text-black dark:hover:bg-secondary rounded-full disabled:bg-gray
  
  `}
                      //   disabled={isSubmitting}
                      disabled={ !isValid}
                    >
                      {showForm ? (
                        isSubmitting ? (
                          <>
                            <span>Submitting</span>
                            <svg
                              aria-hidden="true"
                              role="status"
                              className="inline w-4 h-4 mr-3 ml-3 text-white animate-spin"
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
                          </>
                        ) : (
                          "Submit Query"
                        )
                      ) : (
                        "Confrim"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* {cards && <PlanCards/>} */}
    </>
  );
};
export default QuoteForm;
