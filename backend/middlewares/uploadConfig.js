import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => {
        return {
            // folder: "uploads", // Cloudinary folder
            format: file.mimetype.split("/")[1], // Extract format from MIME type
            use_filename: true,
            unique_filename: true,
        };
    },
});

// File filter to allow only images and PDFs
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/") || file.mimetype === "application/pdf") {
        cb(null, true);
    } else {
        cb(new Error("Only images and PDFs are allowed!"), false);
    }
};

// Multer with file size limit (5MB) and error handling
const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter,
});

export { upload };
