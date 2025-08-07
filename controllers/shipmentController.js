import axios from "axios";

export const getShipment = async (req, res) => {
  const { bookingId } = req.params;
  const { access_token } = req.query;
  console.log("access_token:", access_token);

  try {
    const response = await axios.get(
      `https://api.dsv.com/my-demo/tracking/v2/shipments/bookingId/${bookingId}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "DSV-Subscription-Key": process.env.DSV_TRACKING_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    console.error("DSV API error:", err.response?.data || err.message);
    res.status(500).json({
      error: "Error getting shipment",
      details: err.response?.data || err.message,
    });
  }
};
