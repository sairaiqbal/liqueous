

export default async function confirmShares(formData: any) {
    
     
    try {
      const response = await fetch(
        '/api/quote/make_deal_plan',
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
  