'use client'
import { useEffect, useState } from "react";
import TickerCard from "./components/TickerCard";

interface Ticker {
  alphabet: string,
  name: string;
  company: string;
  price: number;
  growth: number;
  delta: string;
}

const Home: React.FC = () => {
  const [tickerData, setTickerData] = useState<Ticker[]>([]);
  useEffect(() => {
    // Replace this with your actual API function
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
  console.log(tickerData)
  return (
    <div className="hidden md:flex justify-between mb-4 ">
      <TickerCard colorClass="bg-[#d6d3d1]" ticker={tickerData[0]} />
      <TickerCard colorClass="bg-primary" ticker={tickerData[1]} />

    </div>
  );
};
export default Home;
