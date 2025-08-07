import axios from "axios";

export const getToken = async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.dsv.com/my-demo/oauth/v1/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "DSV-Subscription-Key": process.env.DSV_SUBSCRIPTION_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    console.error("TOKEN ERROR:", err.response?.data || err.message);
    res.status(500).json({
      error: "Error getting token",
      details: err.response?.data || err.message,
    });
  }
};
