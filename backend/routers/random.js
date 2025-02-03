import random from '../controllers/random.js'
import express from "express";
const router = express.Router();

router.get("/random", random);

export default router;