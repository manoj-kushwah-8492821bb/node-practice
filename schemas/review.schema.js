import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  post: { type: mongoose.Types.ObjectId, ref: "Post", required: true },
});

const reviewModal = mongoose.model("Review", reviewSchema);
export default reviewModal;
