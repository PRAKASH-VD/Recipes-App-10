// 📁 Controllers/RecipeController.js
import Recipes from "../Models/RecipeSchema.js";

export const CreateRecipe = async (req, res) => {
  try {
    const data = req.body;
    // Check if data is array → use insertMany
    if (Array.isArray(data)) {
      const result = await Recipes.insertMany(data);
      res.status(200).json({ message: "Recipes Added Successfully", data: result });
    } else {
      const newRecipe = new Recipes(data);
      await newRecipe.save();
      res.status(200).json({ message: "Recipe Added Successfully", data: newRecipe });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipes.find();
    res.status(200).json({ message: "Recipes retrieved", data: recipes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipes.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json({ message: "Recipe retrieved", data: recipe });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateRecipe = async (req, res) => {
  try {
    const { name, chef, description, price } = req.body;
    const updated = await Recipes.findByIdAndUpdate(
      req.params.id,
      { name, chef, description, price },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json({ message: "Recipe updated", data: updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    const deleted = await Recipes.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Recipe not found" });
    const remaining = await Recipes.find();
    res.status(200).json({ message: "Recipe deleted", data: remaining });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

