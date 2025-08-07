import axios from "axios";

export const getShipmentByTmsId = async (req, res) => {
  const { tmsId } = req.params;
  const { access_token } = req.query;
  console.log("access_token:", access_token);

  try {
    const response = await axios.get(
      `https://api.dsv.com/my-demo/tracking/v2/shipments/tmsId/${tmsId}`,
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
      error: "Error getting shipment by tmsId",
      details: err.response?.data || err.message,
    });
  }
};
