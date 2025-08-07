import { Router } from "express";
import { getShipment } from "../controllers/shipmentController.js";
import { getShipmentByTmsId } from "../controllers/getShipmentByTmsId.js";

const router = Router();

router.get("/shipment/:bookingId", getShipment);
router.get("/shipment/tms/:tmsId", getShipmentByTmsId);

export default router;
