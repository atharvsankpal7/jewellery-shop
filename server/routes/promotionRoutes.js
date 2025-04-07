import express from "express";
import { getPromotion, updatePromotion } from "../controllers/promotionController.js";
import { protect } from "../middleware/authMiddleware.js";

const router1 = express.Router();

router1.route("/").get(getPromotion).post(protect, updatePromotion);

export { router1 }; // Use named export