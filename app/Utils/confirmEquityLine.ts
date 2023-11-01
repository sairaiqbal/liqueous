export default async function confirmEquityLine(formData: any) {
    
     
    try {
      const response = await fetch(
        '/api/quote/confirm_equity_line_deal',
        {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(formData),
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
  