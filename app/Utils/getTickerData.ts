

interface Ticker {
    alphabet: string,
    name: string;
    company: string;
    price: number;
    growth: number;
    delta: string;
  }

export default async function getTickerData():Promise<Ticker[]> {
    try {
        const response = await fetch('https://liqueous.logixsy.com/api/quote/index',{cache: 'no-cache'});
        const ticker = await response.json();
        const tickerData: Ticker[] = ticker.data;
        return tickerData;
      } catch (error) {
        console.error('Error fetching ticker data:', error);
        return [];
      }
}