export default async function generate_term_sheet(
  id: string,
  option_looking_for: string
) {
  let endPoint;
  if (option_looking_for === "Financing") {
    //  endPoint = "confirm_borro_deal";

    const requestBody = {
      id: id,
      option_looking_for: option_looking_for,
    };
    //   console.log(JSON.stringify(requestBody));
    try {
      const response = await fetch(`/api/quote/generate_term_sheet`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(requestBody),
      });
      const res = await response.json();
      console.log(res);
      return res;
    } catch (error) {
      console.error("Error sending form  data to finalize Plan:", error);
      return {};
    }
  }
}
