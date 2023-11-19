import mongoose from "mongoose";

const blogModel = new mongoose.Schema({
  blog: String,
  slug: String,
});

const Blogs = mongoose.models.blogs || mongoose.model("blogs", blogModel);

export default Blogs;
