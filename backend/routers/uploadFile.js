import express from "express";
const router = express.Router();
import uploadFileController from "../controllers/uploadFile.js";
import { upload } from "../middlewares/uploadConfig.js";
import { checkOriginMiddleware } from "../middlewares/checkOrigin.js";

// Middleware to handle multer errors
const uploadMiddleware = (req, res, next) => {
    upload.single("file")(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: "File upload failed", error: err.message });
        }
        next();
    });
};

router.post("/uploadFileToShare", checkOriginMiddleware, uploadMiddleware, uploadFileController);

export default router;
