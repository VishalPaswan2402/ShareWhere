import savedFile from "../models/shareFile.js";

// API to handle download file...
const downloadFileController = async (req, res) => {
    // console.log("Download file...")
    const { secretKey } = req.body;
    // console.log(secretKey);
    if (!secretKey) {
        return res.status(403).json({ message: "Secret code not available." });
    }
    try {
        const findFile = await savedFile.findOne({ secretCode: secretKey });
        if (!findFile) {
            return res.status(404).json({ message: "Secret code not matched.", error });
        }
        // console.log(findFile);
        return res.status(200).json({
            message: "Download your file",
            dataName:findFile.fileName,
            dataUrl: findFile.shareUrl,
            dataType: findFile.fileType
        });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong", error });
    }
};

export default downloadFileController;