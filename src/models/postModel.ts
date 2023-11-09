import mongoose from "mongoose";

const postModel = new mongoose.Schema({
  title: String,
  keywords: String,
  description: String,
  thumbnailUrl: String,
  body: String,
});

const Posts = mongoose.models.posts || mongoose.model("posts", postModel);

export default Posts;
