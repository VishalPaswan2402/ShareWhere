import express from "express";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import cors from "cors";
import uploadFileRouter from './routers/uploadFile.js'
import downloadFileRouter from './routers/downloadFile.js'

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
const db_url = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/sharewhere";

app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5174',  // React frontend url
    credentials: true
};

app.use(cors(corsOptions));

mongoose.connect(db_url)
    .then(() => console.log("Connected to shareFile DB!"))
    .catch(err => console.log("Mongoose Error", err));

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
    secure: true
});

// api routes
app.use("/api/sharewhere", uploadFileRouter);
app.use("/api/sharewhere", downloadFileRouter);

app.listen(port, () => {
    console.log("Server is running at port", port);
});
