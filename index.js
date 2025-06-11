// index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js";
import RecipesRouter from "./Routers/RecipeRouter.js";

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Connect to DB
connectDB();

// Default Route
app.get("/", (req, res) => {
  res.status(200).send("🍽️ Welcome to the Recipes API🍽️");
});

// Routes
app.use("/api/recipes", RecipesRouter);

// Error Handling (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start Server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`🚀 Server running ..`));//on http://localhost:${port}
