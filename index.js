import dotenv from "dotenv";
import app from "./routes/app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Backend running: http://localhost:${PORT}`)
);