import express from "express";
const router = express.Router();
import uploadFileController from "../controllers/uploadFile.js";
import { upload } from "../middlewares/uploadConfig.js";

router.post("/uploadFileToShare", upload.single("file"), uploadFileController);

export default router;