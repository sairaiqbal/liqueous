'use client'
import { useEffect } from "react";
import MainContent from "./components/MainContent/MainContent";
import TickerArea from "./components/TickerArea/TickerArea";
import AOS from 'aos';




const Home: React.FC = () => {
  
  useEffect(() => {
    // Initialize AOS once the app is mounted
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });
  }, []);
  
  return (
    <div className="overflow-hidden">
      <TickerArea/> 
      <MainContent/>
    </div>
  );
};
export default Home;
