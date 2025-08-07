import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import tokenRoutes from "./tokenRoutes.js";
import shipmentRoutes from "./shipmentRoutes.js";
import webhookRoutes from "./webhookRoutes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", tokenRoutes);
app.use("/api", shipmentRoutes);
app.use("/api", webhookRoutes);

export default app;
