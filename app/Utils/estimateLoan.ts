

export default async function estimateLoan(id: string, requested_shares: string) {
    const requestBody = {
        id: id,
        requested_shares: String(requested_shares),
        // Other data you want to include in the request body
      };
      console.log(JSON.stringify(requestBody));
    try {
      const response = await fetch(
        '/api/quote/estimate_deal_loan',
        {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(requestBody),
          }
      );
      const res = await response.json();
    //   console.log(res);
      return res;
      
     
    } catch (error) {
      console.error("Error sending form  data to request a loan:", error);
      return {};
    }
  }
  