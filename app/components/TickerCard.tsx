import Link from "next/link";
import React from "react";

interface Ticker {
  alphabet: string;
  name: string;
  company: string;
  price: number;
  growth: number;
  delta: string;
}

interface TickerCardProps {
  ticker?: Ticker;
  colorClass?: string;
}

const TickerCard: React.FC<TickerCardProps> = ({ ticker, colorClass }) => {
  debugger;
  //  console.log("tickeerr",ticker?.name);
  return (
    // <Link href={`/landing/US/${ticker?.name}`}>
    //         <div className={`cursor-pointer w-64 p-1.5 bg-white border border-white rounded-full shadow dark:bg-gray-800 dark:border-gray-700 flex mr-2 ml-2 opacity-70 hover:scale-110 hover:border-primary duration-200`}>
    //             <div className={`${colorClass} mt-0.5 ml-0.5 font-bold text-white rounded-full flex items-center justify-center font-mono text-2xl`} style={{ height: '50px', width: '50px' }}>{ticker?.alphabet}</div>
    //             <div className="ml-2">
    //                 <h5 className="mb-0 text-lg tracking-tight text-black dark:text-black">{ticker?.name}</h5>
    //                 <p className="mb-0 text-sm text-gray-500 dark:text-gray-400">${ticker?.price.toFixed(2)}</p>
    //             </div>
    //             <div className="flex items-center justify-center ml-16 text-secondary">
    //                 <p className={`mb-0 text-sm ${ticker?.delta === 'up' ? 'text-[#4ade80]' : 'text-[#fb7185]'} dark:text-gray-400`}>{ticker?.delta === 'up' ? `+${ticker?.growth}%` : `${ticker?.growth}%`}</p>
    //             </div>
    //         </div>
    //     </Link>
    <>
      <Link href={`/landing/US/${ticker?.name}`}>
            <div  className={`cursor-pointer  w-[280px] p-1.5  rounded-full shadow   flex mr-2 ml-2 opacity-70 hover:scale-110 hover:border-primary duration-200 bg-white`} >
                <div className={`${colorClass} mt-0.5 ml-0.5 font-bold text-black rounded-full flex items-center justify-center font-mono text-2xl`} style={{ height: '50px', width: '50px' }}>{ticker?.alphabet}</div>
                <div className="ml-2">
                    <h5 className="mb-0 text-lg tracking-tight text-black ">{ticker?.name}</h5>
                    <p className="mb-0 text-sm text-gray-500 dark:text-gray-400">${ticker?.price}</p>
                </div>
                <div className="flex flex-col items-center justify-center ml-16 ">
                
                    <p className={`mb-0  items-end text-end  text-sm ${ticker?.delta === 'up' ? 'text-[#4ade80]' : 'text-[#fb7185]'} dark:text-gray-400`}>{ticker?.delta === 'up' ? `+${ticker?.growth}%` : `${ticker?.growth}%`}</p>
                </div>
            </div>
        </Link>
    </>
  );
};

export default TickerCard;
