import { Request, Response } from "express";
import ArticleServices from "../services/ArticleServices";

export default new class ArticleControllers {

    // ====================  Post Article ======================
    async create(req:Request, res:Response):Promise<Response>{
        try {
            const dataArticle = req.body
            
            const article = await ArticleServices.create(dataArticle)

                return res.status(200).json(article)
            } catch (error){
                return res.status(500).json({message: "Post Article Error"})
            }
        }
    
    // ====================  Get Article ======================
    async find(req:Request, res:Response):Promise<Response>{
        try {
            const article = await ArticleServices.find()
            
            return res.status(200).json(article)
        } catch (error) {
            return res.status(500).json({message: "Get article error"})
        }
    }

    // ====================  Delete Article ======================
    async delete(req:Request, res:Response):Promise<Response>{
        try {
            const article_id = parseInt(req.params.id)
            const deleteArticle = await ArticleServices.delete(article_id)
            
            return res.status(200).json(deleteArticle)
        } catch (error){
            return res.status(500).json({message: "Delete article error"})
        }
    }
    
    // ====================  Update Article ======================

    async update(req:Request, res:Response):Promise<Response>{
        try {
            const update_id = parseInt(req.params.id)
            const updateArticle = await ArticleServices.update(req.body , update_id)

            return res.status(200).json(updateArticle)
        } catch (error) {
            return res.status(500).json({message : "Update article error"})
        }
    }

}