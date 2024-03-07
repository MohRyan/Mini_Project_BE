import { DeepPartial } from "typeorm";
import dataSource from "../dataSource";
import { Article } from "../entities/Articel.entity";



export default new class ArticleServices {
    // ================== Post Data Article ==============
    async create(reqBody: { title: any; slug: any; image: any; content: any; user_id: number; 
}):Promise<any>
    {
        try{
            const repositoryArticle = dataSource.getRepository(Article)
            const article = repositoryArticle.create({
                title: reqBody.title,
                slug:reqBody.slug,
                image: reqBody.image,
                content:reqBody.content,
                user_id:reqBody.user_id,
            })

            await dataSource
            .getRepository(Article)
            .createQueryBuilder()
            .insert()
            .into(Article)
            .values(article)
            .execute()

            return article
        } catch (error) {
            throw error
        }
    }

    // =============== Get Data Article ==============

    async find():Promise<any>{
        try {
            const repositoryArticle = 
            await dataSource
            .getRepository(Article)
            .createQueryBuilder("article")
            .getMany()

            return repositoryArticle
        } catch (error) {
            throw error
        }
    }

    // ============== Delete Data Article ================

    async delete(id:number):Promise<any>{
        try{
            const repositoryArticle = dataSource.getRepository(Article)
            const articleToDelete = await repositoryArticle.findOne({
                where: {id},
            })

            if (!articleToDelete){
                throw new Error("Article not found")
            }

            await repositoryArticle.remove(articleToDelete)

            await dataSource
            .createQueryBuilder()
            .delete()
            .from(Article)
            .where(articleToDelete)
            .execute()

            return articleToDelete
        } catch (error){
            throw error
        }
    }

    async update(reqBody: { title: any; slug: any; image: any; content: any; user_id: any; } ,id:number){
        try {
            const repositoryArticle = dataSource.getRepository(Article)
            const updateArticle = repositoryArticle.create({
                title: reqBody.title,
                slug:reqBody.slug,
                // publication_date: reqBody.publication_date,
                image: reqBody.image,
                content:reqBody.content,
                user_id:reqBody.user_id
            })

            const articleUpdate = await repositoryArticle.findOne({
                where: {id},
            })

            if(!articleUpdate){
                throw new Error("Article not Found")
            }

            await repositoryArticle.update({id}, updateArticle)

            dataSource
            .createQueryBuilder()
            .update(Article)
            .set(updateArticle)
            .where(articleUpdate)
            .execute()
        } catch (error) {
            throw error
        }
    }

}