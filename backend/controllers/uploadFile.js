import savedFile from "../models/shareFile.js";

// API to handle upload file...
const uploadFileController = async (req, res) => {
    // console.log("Upload file");
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    try {
        // console.log("request: ", req);
        // console.log("Uploaded File:", req.file);
        const result = req.file;
        const seceretKey = Math.floor(100000 + Math.random() * 900000);
        const saveToDb = new savedFile({
            fileName: result.originalname,
            fileType: result.mimetype,
            shareUrl: result.path,
            secretCode: seceretKey
        });
        await saveToDb.save();
        // console.log("SavedDB", saveToDb);
        return res.status(200).json({
            message: "File uploaded successfully",
            fileUrl: result.path,  // Cloudinary URL of the uploaded file
            secretCode: saveToDb.secretCode
        });
    } catch (error) {
        return res.status(500).json({ message: "File upload failed", error });
    }
};

export default uploadFileController;