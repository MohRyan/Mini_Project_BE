import express from "express";
import UserControllers from "../controllers/UserControllers";
import ArticleControllers from "../controllers/ArticleControllers";

const Route = express.Router()

// === User Route
Route.post("/user", UserControllers.create)
Route.get("/user", UserControllers.find)
Route.delete("/user/:id", UserControllers.delete)
Route.patch("/user/:id", UserControllers.update)

// === Article Route
Route.post("/article", ArticleControllers.create)
Route.get("/article", ArticleControllers.find)
Route.delete("/article/:id", ArticleControllers.delete)
Route.patch("/article/:id", ArticleControllers.update)

export default Route