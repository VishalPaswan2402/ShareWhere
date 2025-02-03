import express from "express";
import downloadFileController from "../controllers/downloadFile.js";
const router = express.Router();

router.post("/downloadFile", downloadFileController);

export default router;