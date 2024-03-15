// import { Request, Response } from "express";
// import ArticleServices from "../services/ArticleServices";

// export default new (class ArticleControllers {

//     // ====================  Post Article ======================
//     async create(req: Request, res: Response): Promise<Response> {
//         try {
//             const data = req.body
//             // const id = parseInt(req.params.id)

//             // console.log("data masuk", data);
//             const articles = await ArticleServices.CreateArticle(data)

//             return res.status(200).json({ data: articles })
//         } catch (error) {
//             return res.status(500).json({ message: "Post Article Error haloooo" })
//         }
//     }

//     // ====================  Get Article ======================
//     async find(req: Request, res: Response): Promise<Response> {
//         try {
//             const articles = await ArticleServices.AllArticles()

//             return res.status(200).json({ data: articles })
//         } catch (error) {
//             return res.status(500).json({ message: "Get article error" })
//         }
//     }

//     async findWithId(req: Request, res: Response): Promise<Response> {
//         try {
//             const userId = parseInt(req.params.id)

//             const article = await ArticleServices.findArticleById(userId)

//             return res.status(200).json({ data: article, message: `user ${userId}` })
//         } catch (error) {
//             return res.status(500).json({ message: error })
//         }
//     }

//     // ====================  Delete Article ======================
//     async delete(req: Request, res: Response): Promise<Response> {
//         try {
//             const article_id = parseInt(req.params.id)
//             ArticleServices.delete(article_id)

//             return res.status(200).json("Data is Delete Successss")
//         } catch (error) {
//             return res.status(500).json({ message: "Delete article error" })
//         }
//     }

//     // ====================  Update Article ======================

//     async update(req: Request, res: Response): Promise<Response> {
//         try {
//             const update_id = parseInt(req.params.id)
//             const newData = req.body

//             const updatedUsers = ArticleServices.update(update_id, newData)

//             return res.status(200).json({ data: updatedUsers, message: "Updated data Success" })
//         } catch (error) {
//             return res.status(500).json({ message: "Update article error" })
//         }
//     }

// }
// )


import { Request, Response } from "express";
import ArticleService from "../services/ArticleServices";


export default new (class ArticlesController {
    async find(req: Request, res: Response): Promise<Response> {
        try {
            const articles = await ArticleService.AllArticles();
            return res.status(200).json({ data: articles });
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;
            // console.log("data masuk", data);

            const articles = await ArticleService.CreateArticle(data);

            return res
                .status(200)
                .json({ data: articles });
            //   const articles = await ArticleService.CreateArticle(data)
        } catch (error) {
            return res.status(400).json({ message: error });
            // console.log(error)
        }
    }

    async findGetUser(req: Request, res: Response): Promise<Response> {
        try {
            const userId = parseInt(req.params.userId);

            const article = await ArticleService.getUserArticleById(userId);

            return res.status(200).json({ data: article, message: `user ${userId}` });
        } catch (error) {
            return res.status(400).json({ message: error });
            // console.log(error)
        }
    }

    async UpdateArticles(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const newData = req.body;
            // console.log(id)
            // console.log(newData)

            const updatedUsers = await ArticleService.updateArticle(id, newData);

            return res
                .status(200)
                .json({ data: updatedUsers, message: "Updated data successfully" });
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }

    async PatchArticles(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const newData = req.body;
            // console.log(id)
            // console.log(newData)

            const updatedUsers = await ArticleService.patchArticle(id, newData);

            return res
                .status(200)
                .json({ data: updatedUsers, message: "Updated data successfully" });
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }

    async DeleteArticle(req: Request, res: Response): Promise<any> {
        try {
            const id = parseInt(req.params.id);
            // console.log("delete success",id)

            await ArticleService.deleteArticle(id);

            return res.status(200).send("Data Removed Successfully");
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }
})();
