'use client'
import React, { useEffect, useState } from 'react';
import TickerCard from '../TickerCard';
import SearchBar from '../SearchBar/SearchBar';

interface Ticker {
  alphabet: string,
  name: string;
  company: string;
  price: number;
  growth: number;
  delta: string;
}

const TickerArea = () => {
  

  const [tickerData, setTickerData] = useState<Ticker[]>([]);
  useEffect(() => {
    
    const fetchTickerData = async () => {
        try {
            const response = await fetch('https://liqueous.logixsy.com/api/quote/index');
            const ticker = await response.json();
            setTickerData(ticker.data);
            
        } catch (error) {
            console.error('Error fetching ticker data:', error);
        }
    };
  
  fetchTickerData();
  
  }, []);
  return (
    <div >
      <div className="relative">
        <img src="/assets/images/banner-lefticon.png" alt="banner-lefticon"
          className="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]" />
        <img src="/assets/images/banner-rightIcon.png" alt="banner-rightIcon"
          className="absolute right-0 -top-4 sm:right-[250px] lg:right-[150px]" />

        <div className="container">
          <div className="relative bg-[url('/assets/images/world-map.png')] 
                bg-cover bg-top bg-no-repeat pt-8 pb-0 lg:pb-20">
            <div className="hidden md:flex justify-center mb-4  ">
              <TickerCard colorClass='bg-primary' ticker={tickerData[0]} />
              <TickerCard colorClass='bg-[#22c55e]' ticker={tickerData[1]} />
            </div>
            <div className="hidden md:flex justify-between mb-4 ">
              <TickerCard colorClass='bg-[#d6d3d1]' ticker={tickerData[2]} />
              <TickerCard  colorClass='bg-[#facc15]' ticker={tickerData[3]}/>
            </div>

            <div className="relative z-[1] text-center text-white ">

              <h2 className="text-4xl font-extrabold leading-normal sm:text-6xl lg:text-[50px] lg:leading-[60px]">
                <span className="text-primary text-xl ">
                  SAME DAY QUOTES
                  <br className="lg:hidden md:hidden" />
                  <span className="lg:inline md:inline">NO OBLIGATIONS</span>
                </span><br />
                <span className="text-black dark:text-white">Innovating for a Sustainable Future</span> <br/>
                  <span className="text-primary">Our Multi-Strategy </span>
                  <span className="text-secondary">Fund Approach</span> <br />

              </h2>

            </div>

            {/* Search Bar  */}
            <SearchBar/>

            <div className="hidden md:flex justify-between mb-4">
            <TickerCard  colorClass='bg-[#0c4a6e]' ticker={tickerData[4]}/>
            <TickerCard  colorClass='bg-[#0284c7]' ticker={tickerData[5]}/>
            </div>
            <div className="hidden md:flex justify-center">
            <TickerCard  colorClass='bg-[#22c55e]' ticker={tickerData[6]}/>
            <TickerCard  colorClass='bg-[#fb7185]' ticker={tickerData[7]}/>
            </div>


          </div>
        </div>
      </div>
    </div >
  );
}

export default TickerArea;
