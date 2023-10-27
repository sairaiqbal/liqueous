

export default async function finalizePlan(option_looking_for : string , id : string , term_table : string) {
    let endPoint;
    if(option_looking_for === "Financing"){
         endPoint = "confirm_borro_deal";
    }
    else{
         endPoint = "confirm_sale_deal";
    }
    const requestBody = {
        id: id,
        term_table: term_table
      };
    //   console.log(JSON.stringify(requestBody));
    try {
      const response = await fetch(
        `/api/quote/${endPoint}`,
        {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(requestBody),
          }
      );
      const res = await response.json();
      console.log(res);
      return res;
      
     
    } catch (error) {
      console.error("Error sending form  data to finalize Plan:", error);
      return {};
    }
  }
  