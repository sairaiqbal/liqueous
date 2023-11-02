import React from "react";
import getTickerDetailById from "@/app/Utils/getTickerDetailById";
import Link from "next/link";
import LandingCards from "./landingCard";
import DynamicTicker from "@/app/components/DynamicTicker/DynamicTicker";
import DynamicGraph from "@/app/components/DynamicGraph/DynamicGraph";
import Head from "next/head";
interface QuoteProps {
  params: {
    tickerid: string;
  };
}

const Landing: React.FC<QuoteProps> = async ({ params }) => {
  const tickerDetail = await getTickerDetailById(
    params.tickerid[0],
    params.tickerid[1]
  );
  // console.log("tickerinquote", tickerDetail);

  const tickerData = {
    code: tickerDetail.fundamentals?.General?.Code,
    // name: tickerDetail.fundamentals.General.Name,
    name: tickerDetail.fundamentals?.General?.Name,
    type: tickerDetail.fundamentals?.General?.Type,
    alphabet: tickerDetail.fundamentals?.General?.Code[0],
    price: tickerDetail.price,
    growth: tickerDetail.growth,
    market_cap:tickerDetail.market_cap,
    logo: tickerDetail.logo_url,
};


  
return (
    <> <Head>
    {/* Update the title and meta description for this page */}
    <title>hello</title>
    <meta name="description" content={"hi"} />
  </Head>
        <div className="bg-white">
            <DynamicTicker ticker={tickerData} />
            <div>
                <LandingCards tickerData={tickerData}/>
            </div>
            {/* <div className="flex justify-center w-full my-4 ">
                <div className=" w-[80%] lg:flex hidden ">
                        <a
                            className=" px-4 py-1 flex items-center  mt-4 block w-fit  bg-primary text-white rounded-full">Overview</a>
                        <button
                            className="px-4 py-1 flex items-center   mt-4 block w-fit  bg-transparent text-black rounded-full">Financials</button>
                        <button
                            className="px-4 py-1 flex items-center   mt-4 block w-fit  bg-transparent text-black rounded-full">Short
                            Data</button>
                        <button
                            className="px-4 py-1 flex items-center   mt-4 block w-fit  bg-transparent text-black rounded-full">SEC
                            Fillings</button>
                        <button
                            className="px-4 py-1 flex items-center   mt-4 block w-fit  bg-transparent text-black rounded-full">Historical
                            Data</button>
                        <button
                            className="px-4 py-1 flex items-center   mt-4 block w-fit  bg-transparent text-black rounded-full">Level
                            ll Data</button>
                        <button
                            className="px-4 py-1 flex items-center   mt-4 block w-fit  bg-transparent text-black rounded-full">Company
                            Profile</button>
                </div>
            </div> */}
            <div className="flex justify-center mt-16 mb-10 ">
                <div className="w-[87%]">
                    <DynamicGraph symbol={tickerData.code} />
                </div>
            </div>
            
        </div>
    </>
);

}
export default Landing;
export function generateMetadata() {
    return {
      title: "Stock Loan | Liqueous",
      description: "Stock Loan Page",
    };
  }
