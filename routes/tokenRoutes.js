import { Router } from "express";
import { getToken } from "../controllers/tokenController.js";

const router = Router();

router.post("/token", getToken);

export default router;
