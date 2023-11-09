import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: { type: Array, required: true, default: [] },
  auther: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

const postModal = mongoose.model("Post", postSchema);
export default postModal;
