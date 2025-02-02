import express from "express";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import savedFile from './models/shareFile.js';
import { upload } from "./middlewares/uploadConfig.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
const db_url = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/sharewhere";

app.use(express.json());

mongoose.connect(db_url)
    .then(() => console.log("Connected to shareFile DB!"))
    .catch(err => console.log("Mongoose Error", err));

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
    secure: true
});

app.post("/api/sharewhere/uploadFileToShare", upload.single("file"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }
        console.log("Uploaded File:", req.file);
        const result = req.file;
        const seceretKey = Math.floor(100000 + Math.random() * 900000);
        const saveToDb = new savedFile({
            fileType: result.mimetype, shareUrl: result.path, secretCode: seceretKey
        });
        await saveToDb.save();
        console.log("SavedDB", saveToDb);
        res.json({
            message: "File uploaded successfully",
            fileUrl: req.file.path,  // Cloudinary URL of the uploaded file
            secretCode: saveToDb.secretCode
        });
    } catch (error) {
        return res.status(500).json({ message: "File upload failed", error });
    }
});

app.listen(port, () => {
    console.log("Server is running at port", port);
});
