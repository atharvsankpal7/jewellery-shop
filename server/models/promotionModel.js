import mongoose from "mongoose";

const promotionSchema = mongoose.Schema(
  {
    image: { type: String, required: true },
    cloudinaryId: { type: String, required: true },
  },
  { timestamps: true }
);

const Promotion = mongoose.model("Promotion", promotionSchema);

export default Promotion;