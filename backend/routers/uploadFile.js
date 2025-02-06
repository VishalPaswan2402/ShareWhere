import express from "express";
const router = express.Router();
import uploadFileController from "../controllers/uploadFile.js";
import { upload } from "../middlewares/uploadConfig.js";
import { checkOriginMiddleware } from "../middlewares/checkOrigin.js";

router.post("/uploadFileToShare", checkOriginMiddleware, upload.single("file"), uploadFileController);

export default router;