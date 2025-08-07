export const webhookHandler = (req, res) => {
  console.log("📦 Webhook received:", req.body);
  res.status(200).send("OK");
};
