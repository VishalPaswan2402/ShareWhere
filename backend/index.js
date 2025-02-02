import express from "express";
const app = express();
import mongoose from 'mongoose';
import cloudinary from 'cloudinary'
import { uploadImage ,uploadFile } from './middlewares/uploadImage.js'
import dotenv from 'dotenv'
dotenv.config();

const port = process.env.PORT || 8080;
const db_url = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/shareFile";

app.use(express.json());

try {
    mongoose.connect(db_url)
        .then(() => console.log('Connected to shareFile DB!'));
} catch (error) {
    console.log("Mongoose Error", error);
}


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,  // Replace with your Cloudinary cloud name
    api_key: process.env.CLOUD_API_KEY,        // Replace with your Cloudinary API key
    api_secret: process.env.CLOUD_API_SECRET,  // Replace with your Cloudinary API secret
    secure: true
});

// console.log(cloudinary.config());

// uploadFile();



app.post("/api/uploadFileToShare", async (req, res) => {
    console.log("Hitted");
    res.json({ message: "File uploaded successfully" });
})

app.listen(port, () => {
    console.log("Server is running at port", port)
})