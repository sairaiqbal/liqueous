export default async function createUser(userData: any) {
    try {
      const response = await fetch(
        '/api/contact_us/create',
        {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(userData),
          }
      );
      const res = await response;
      // console.log(res);
      return res.json();
     
    } catch (error) {
      console.error("Error sending User Data :", error);
      return null;
    }
  }
  