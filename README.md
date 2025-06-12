
# 🍽️ Recipes App Backend

A simple RESTful API built with Node.js, Express, and MongoDB to manage recipes. This API supports creating, reading, updating, and deleting recipes.

## 📁 Project Structure

```
Recipes-App/
│
├── Controllers/
│   └── RecipeController.js       # Logic for API endpoints
│
├── Models/
│   └── RecipeSchema.js           # Mongoose schema for recipes
│
├── Routers/
│   └── RecipeRouter.js           # API route definitions
│
├── Database/
│   └── dbConfig.js               # MongoDB connection setup
│
├── .env                          # Environment variables
├── index.js                      # Entry point (Express setup)
├── package.json
└── README.md
```

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/PRAKASH-VD/Recipes-App-10
cd recipes-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

```env
PORT=3000
MONGODB_URL=your_mongodb_connection_string
```

> Replace `your_mongodb_connection_string` with your actual MongoDB URI (e.g., from MongoDB Atlas).

## 🚀 Running the Server

```bash
npm start
```

Server will start on:  
```
https://recipes-app-10.onrender.com/
http://localhost:5000
```

## 📦 API Endpoints

All endpoints are prefixed with:  
`http://localhost:5000/api/recipes`

| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| POST   | `/create`            | Create a new recipe          |
| GET    | `/getdata`           | Get all recipes              |
| GET    | `/getdata/:id`       | Get recipe by ID             |
| PUT    | `/update/:id`        | Update recipe by ID          |
| DELETE | `/delete/:id`        | Delete recipe by ID          |

## 🧪 Sample POST (Create Recipe)

### URL FOR API 
```

```
https://documenter.getpostman.com/view/39965124/2sB2x5HYir
### JSON Body (Raw)
{
  "name": "Butter Chicken",
  "chef": "Chef Harpal",
  "description": "Creamy tomato-based curry with grilled chicken.",
  "price": 280,
  "ingredients": ["chicken", "butter", "cream", "spices"],
  "cookingTime": 45
}


## 📦 Bulk Insert Example

Send an **array** of recipes to the same `/create` endpoint:
```json
[
  {
    "name": "Veg Pulao",
    "chef": "Chef Neha",
    "description": "Aromatic basmati rice with mixed vegetables.",
    "price": 180,
    "ingredients": ["basmati rice", "mixed vegetables", "spices"],
    "cookingTime": 30
  },
  {
    "name": "Paneer Butter Masala",
    "chef": "Chef Raj",
    "description": "Cottage cheese in creamy tomato gravy.",
    "price": 220,
    "ingredients": ["paneer", "tomatoes", "cream", "butter", "spices"],
    "cookingTime": 35
  }
]

```

## 🛠 Tools Used

- Node.js
- Express
- MongoDB (via Mongoose)
- Postman (for API testing)
- dotenv (for environment variables)
- CORS

## 🙋‍♂️ Author

**Prakash V**  
_This project was built as part of the FSD (Full Stack Development) learning journey._

## 📬 Contact

Feel free to reach out if you face any issues or have questions.

## 📜 License

This project is licensed under the MIT License.
