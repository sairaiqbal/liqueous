export default async function getTickerDetailById(
    exchange: string,
    stock: string
  ) {
    try {
      const response = await fetch(
        "https://liqueous.logixsy.com/api/quote/detail",
        {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({ stock: stock, exchange: exchange }),
        }
      );
      const ticker = await response.json();
  
      const tickerData = ticker;
  
      return tickerData;
    } catch (error) {
      console.error("Error fetching ticker data:", error);
      return {};
    }
  }
  