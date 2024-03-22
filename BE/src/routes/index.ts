import express from "express";
import UserControllers from "../controllers/UserControllers";
import ArticleControllers from "../controllers/ArticleControllers";
import PartaiControllers from "../controllers/PartaiController";
import PaslonControllers from "../controllers/PaslonController";

const Route = express.Router()

// === Auth Route
Route.post("/register", UserControllers.create)
Route.post("/login", UserControllers.login)


// === Users Route
Route.get("/users", UserControllers.find)
Route.get("/users/user", UserControllers.findUser)
Route.get("/users/admin", UserControllers.findAdmin)
// Route.get("/users/admin/:id", UserControllers.findAdminWithId)
Route.delete("/users/:id", UserControllers.delete)
Route.patch("/users/:id", UserControllers.update)

// === Article Route
Route.get("/article", ArticleControllers.find)
Route.post("/article", ArticleControllers.create)
Route.delete("/article/:id", ArticleControllers.DeleteArticle)
Route.patch("/article/:id", ArticleControllers.PatchArticles)

Route.get("/article/users/:userId", ArticleControllers.findGetUser)

// === Partai Route
Route.post("/partai", PartaiControllers.create)
Route.get("/partai", PartaiControllers.find)
Route.delete("/partai/:id", PartaiControllers.delete)
Route.patch("/partai/:id", PartaiControllers.update)

// === Paslon Route
Route.post("/paslon", PaslonControllers.create)
Route.get("/paslon", PaslonControllers.find)
Route.delete("/paslon/:id", PaslonControllers.delete)
Route.patch("/paslon/:id", PaslonControllers.update)
export default Route