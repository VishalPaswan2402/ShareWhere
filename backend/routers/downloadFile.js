import express from "express";
import downloadFileController from "../controllers/downloadFile.js";
const router = express.Router();
import { checkOriginMiddleware } from "../middlewares/checkOrigin.js";

router.post("/downloadFile",checkOriginMiddleware, downloadFileController);

export default router;