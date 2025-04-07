import asyncHandler from "express-async-handler";
import cloudinary from "../config/cloudinary.js";
import Promotion from "../models/promotionModel.js";

// @desc    Get current promotion
// @route   GET /api/promotion
// @access  Public
const getPromotion = asyncHandler(async (req, res) => {
  const promotion = await Promotion.findOne();
  res.json(promotion);
});

// @desc    Update promotion
// @route   POST /api/promotion
// @access  Private/Admin
const updatePromotion = asyncHandler(async (req, res) => {
  const { image, cloudinaryId } = req.body;

  // Delete old image from Cloudinary
  const existingPromotion = await Promotion.findOne();
  if (existingPromotion?.cloudinaryId) {
    await cloudinary.uploader.destroy(existingPromotion.cloudinaryId);
  }

  // Update promotion
  const promotion = await Promotion.findOneAndUpdate(
    {},
    { image, cloudinaryId },
    { new: true, upsert: true }
  );

  res.json(promotion);
});

export { getPromotion, updatePromotion };