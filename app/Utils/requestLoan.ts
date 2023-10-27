export default async function requestLoan(formData: any) {
    try {
      const response = await fetch(
        '/api/quote/request_deal',
        {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(formData),
          }
      );
      const res = await response;
      // console.log(res);
      return res.json();
     
    } catch (error) {
      console.error("Error sending form  data to request a loan:", error);
      return {};
    }
  }
  