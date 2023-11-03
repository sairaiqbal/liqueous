"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Popup from "../PopUp/Popup";

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

const SearchBar = ({ showButton }) => {
  const { control } = useForm();
  const [searchResults, setSearchResults] = useState<SearchResults[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const fetchData = async (value: string) => {
    // Implement your API fetch logic here based on the input value
    // For example:
    const response = await fetch(`/api/quote/tickers?search=${value}`);
    const data = await response.json();
    //    console.log("data ", data);
    setSearchResults(data.data); // Update search results with fetched data
    setIsDropdownOpen(true); // Open the dropdown
  };

  const onFocusTickerSearch = () => {
    setIsDropdownOpen(true); // Open the dropdown when input is focused
  };

  const onBlurTickerSearch = () => {
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // You can adjust the delay (e.g., 200ms) as needed
  };

  const handleInputChange = async (value: string) => {
    if (value) {
      await fetchData(value); // Fetch data when input value changes
    } else {
      setSearchResults([]); // Clear search results when input is empty
    }
  };

  return (
    <div className="relative text-center my-16">
      <div className="relative max-w-[600px] mr-auto ml-auto">
        <div className="relative text-start p-[5px]  min-w-[300px] lg:w-full ">
          <div className="pl-4 items-center  ">
            <Controller
              name="tickerSearch"
              control={control}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="text"
                    placeholder="Search company or symbol"
                    className=" w-full rounded-full pt-4 px-4 py-4 text-black font-bold  border-2  outline-none transition border-primary  shadow"
                    onFocus={onFocusTickerSearch}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onBlur={onBlurTickerSearch}
                  />
                </div>
              )}
            />
            <div className="absolute top-6 right-6 text-primary">
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

            {isDropdownOpen && (
              <div className="absolute top-16 z-10 w-full text-black font-bold outline-none dark:bg-gray-dark max-h-48 overflow-auto">
                <ul className="py-1">
                  {searchResults.map((result, index) => (
                    <Link
                      key={index}
                      href={`/landing/${result.exchange_code}/${result.code}`}
                    >
                      <li className="px-4 py-2 mb-1 rounded-2xl text-left cursor-pointer bg-white text-black hover:text-primary  mr-3">
                        <div className="flex justify-between ">
                          <span className="font-bold min-w-[150px]">
                            {result.exchange_code}
                          </span>
                          <span className="font-thin whitespace-nowrap text-clip overflow-hidden">
                            {result.name}
                          </span>
                        </div>
                        <div className="flex justify-between ">
                          <div className="font-thin text-sm">{result.code}</div>
                          <span className="font-thin italic text-sm">
                            {result.exchange_name}
                          </span>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {showButton && (
        <button
          className="btn mx-auto mt-10 block w-fit mr-auto ml-auto bg-primary text-white rounded-full"
          onClick={handleClick}
        >
          Get A QUOTE TODAY
        </button>
      )}
      {isOpen && <Popup setIsOpen={setIsOpen} />}
    </div>
  );
};

export default SearchBar;
