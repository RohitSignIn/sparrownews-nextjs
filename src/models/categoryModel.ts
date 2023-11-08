import mongoose from "mongoose";

const categoriesModel = new mongoose.Schema({
  name: String,
  title: String,
  keywords: String,
  description: String,
});

const Categories =
  mongoose.models.categories || mongoose.model("categories", categoriesModel);

export default Categories;
