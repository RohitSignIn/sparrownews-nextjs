import mongoose from "mongoose";

const postModel = new mongoose.Schema({
  category: String,
  title: String,
  slug: String,
  keywords: String,
  description: String,
  thumbnailUrl: String,
  inCarousel: Boolean,
});

const Posts = mongoose.models.posts || mongoose.model("posts", postModel);

export default Posts;
