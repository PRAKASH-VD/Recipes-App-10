// 📁 Models/RecipeSchema.js
import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    chef: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    ingredients: { type: [String], required: true },
    cookingTime: { type: Number, required: true },
  },
  { timestamps: true }
);

const Recipes = mongoose.model("Recipes", RecipeSchema);
export default Recipes;
