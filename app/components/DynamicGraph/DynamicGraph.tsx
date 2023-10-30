'use client'

import React, { useEffect,useRef, useState } from 'react';

declare global {
  interface Window {
    TradingView: any;
  }
}

interface DynamicGraphProps {
  symbol: string;

}

const DynamicGraph:React.FC<DynamicGraphProps>= ({symbol}) => {
  console.log("symbol", symbol);

  const chartContainerRef = useRef(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  useEffect(() => {
    console.log('hello from script')
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {

    console.log('hello from trading view')
    

    if ( scriptLoaded && window.TradingView && chartContainerRef.current) { 
      console.log('hello trading')// Check if TradingView is available
      const widget = new window.TradingView.widget({ 
        symbol: symbol,            // Symbol for Apple Inc.
        interval: 'D',             // Daily interval
        container_id: 'tradingview-advanced-chart-container',  // ID of the container element

        // Style and design settings
        theme: 'light',
        autosize: true,
        studies: ['MACD@tv-basicstudies'], // You can add more studies

        // More configuration options...
        // ...
      },[symbol,scriptLoaded]);

      
    }
  }, );

  return (
    <div ref={chartContainerRef} id="tradingview-advanced-chart-container"  className='w-full h-[52rem]'>
      {/* The advanced chart will be rendered here */}
    </div>
  );


};

export default DynamicGraph;