export default async function createSubscription(formData: string) {
    try {
      const response = await fetch(
        '/api/newsletter_subscription/create_subscription',
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
      console.error("Error on subscription:", error);
      return {};
    }
  }
  