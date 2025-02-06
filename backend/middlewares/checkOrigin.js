import dotenv from 'dotenv'
dotenv.config();
export const checkOriginMiddleware = (req, res, next) => {
    const allowedOrigin = process.env.FRONTEND_ORIGIN;
    const origin = req.headers.origin;
    // console.log("Originchecker");
    if (origin !== allowedOrigin) {
        return res.status(403).json({ message: "Forbidden: Invalid origin" });
    }
    // console.log("Originnext");
    next();
};