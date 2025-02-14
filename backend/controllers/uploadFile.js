// import savedFile from "../models/shareFile.js";

// // API to handle upload file...
// const uploadFileController = async (req, res) => {
//     // console.log("Upload file");
//     if (!req.file) {
//         return res.status(400).json({ message: "No file uploaded" });
//     }
//     try {
//         // console.log("request: ", req);
//         // console.log("Uploaded File:", req.file);
//         const result = req.file;
//         const seceretKey = Math.floor(100000 + Math.random() * 900000);
//         const saveToDb = new savedFile({
//             fileName: result.originalname,
//             fileType: result.mimetype,
//             shareUrl: result.path,
//             secretCode: seceretKey
//         });
//         await saveToDb.save();
//         // console.log("SavedDB", saveToDb);
//         return res.status(200).json({
//             message: "File uploaded successfully",
//             fileUrl: result.path,  // Cloudinary URL of the uploaded file
//             secretCode: saveToDb.secretCode
//         });
//     } catch (error) {
//         return res.status(500).json({ message: "File upload failed", error });
//     }
// };

// export default uploadFileController;







import savedFile from "../models/shareFile.js";

// API to handle file upload
const uploadFileController = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    try {
        const result = req.file;
        const secretKey = (Math.floor(100000 + Math.random() * 900000)).toString(); // Ensure string format

        const saveToDb = new savedFile({
            fileName: result.originalname,
            fileType: result.mimetype,
            shareUrl: result.path || result.secure_url, // Ensure correct URL
            secretCode: secretKey
        });

        await saveToDb.save();

        return res.status(200).json({
            message: "File uploaded successfully",
            fileUrl: saveToDb.shareUrl,  // Ensure returning the correct URL
            secretCode: saveToDb.secretCode
        });
    } catch (error) {
        console.error("Error saving file:", error);
        return res.status(500).json({ message: "File upload failed", error: error.message });
    }
};

export default uploadFileController;
