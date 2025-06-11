// 📁 Routers/RecipeRouter.js
import express from "express";
import {
  CreateRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} from "../Controllers/RecipeController.js";

const router = express.Router();

router.post("/", CreateRecipe);
router.get("/", getAllRecipes);
router.get("/:id", getRecipeById);
router.put("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

export default router;

