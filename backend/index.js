import express from "express";
const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.post("/api/uploadFileToShare", async (req, res) => {
    console.log("Hitted");
    res.json({ message: "File uploaded successfully" });
})

app.listen(port, () => {
    console.log("Server is running at port", port)
})