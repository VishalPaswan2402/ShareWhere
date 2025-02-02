import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        // folder: "uploads", // Cloudinary folder
        allowedFormats: ["jpg", "jpeg", "png", "pdf"], // Allowed file types
        use_filename: true,
        unique_filename: true,
    },
});

// Multer with file size limit (5MB) and error handling
const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

export { upload };
