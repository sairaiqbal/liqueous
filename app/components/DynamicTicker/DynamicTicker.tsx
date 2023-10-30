import Image from "next/image";
import React from "react";

interface DynamicTicker {
  code: string;
  name: string;
  type: string;
  alphabet: string;
  price: number;
  growth: number;
  logo: string;
  market_cap: number;
}

interface DynamicTickerProps {
  ticker: DynamicTicker;
}

const DynamicTicker: React.FC<DynamicTickerProps> = ({ ticker }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="py-[18px] px-[20px] gap-10   flex-col sm:flex-row  flex sm:items-center  flex-start  w-[80%] ">
        <div className="flex items-center gap-4">
          <div className="  grid place-items-center h-[50px] w-[50px]   text-white  rounded-full  ">
            <div
              className={` flex items-center justify-center w-12 min-w-8 h-12 min-h-8 mr-1 rounded-full text-lg uppercase text-white  dark:text-gray-dark dark:bg-gray`}
              style={{ height: "50px", width: "50px" }}
            >
              {ticker.logo && (
                <Image src={ticker.logo} width={50} height={50} alt="logo" />
              )}
              {ticker.logo ? "" : ticker.alphabet}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-lg font-bold text-black dark:text-white">
              {ticker.code}
            </div>
            <div className="flex text-xs text-black">
              <h1>{ticker.name}</h1>
              <span> - {ticker.type}</span>
            </div>
          </div>
        </div>

        <div className=" ">
          <h1 className="text-lg font-bold text-black dark:text-white">
            Last Close Price: ${ticker.price}
          </h1>
        </div>
        <div>
          {ticker.market_cap > 0 ? (
            <h1 className="text-lg font-bold text-black dark:text-white">
              Market Cap: ${ticker.market_cap}
            </h1>
          ) : null}
        </div>
        <div>
          <span
            className={` text-lg font-semibold ${
              ticker.growth >= 0 ? "text-[#329d37]" : "text-[#db3434]"
            } `}
          >
            {ticker.growth >= 0 ? "+" : ""}
            Growth: {ticker.growth}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DynamicTicker;
