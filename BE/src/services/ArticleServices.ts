// import dataSource from "../dataSource";
// import { Articles } from "../entities/Articel.entity";
// import { Users } from "../entities/User.entity";


// export default new (
//     class ArticleServices {
//         repositoryArticle = dataSource.getRepository(Articles)
//         // ================== Post Data Article ==============
//         async CreateArticle(reqBody: any, id: number): Promise<any> {
//             try {
//                 const repoUsers = dataSource.getRepository(Users)
//                 const articleToCreate = await repoUsers.findOne({
//                     where: { id },
//                 })
//                 console.log(articleToCreate?.id)
//                 const article = this.repositoryArticle.create({
//                     title: reqBody.title,
//                     slug: reqBody.slug,
//                     image: reqBody.image,
//                     content: reqBody.content
//                 })

//                 const id_users = articleToCreate?.id

//                 const savedArticles = await this.repositoryArticle.save(article)


//                 const articleWithUser = await this.repositoryArticle
//                     .createQueryBuilder("articles")
//                     .leftJoinAndSelect("articles.users", "users")
//                     .where("users.id = :id", { id: savedArticles.id })
//                     .loadAllRelationIds()
//                     .getMany()

//                 console.log(savedArticles.id)
//                 // return articleWithUser
//             } catch (error) {
//                 throw error
//             }
//         }

//         // =============== Get Data Article ==============

//         async findArticleAll(): Promise<any> {
//             try {

//                 const articles = await this.repositoryArticle.find({
//                     relations: {
//                         users: true,
//                     },
//                 })

//                 return articles
//             } catch (error) {
//                 throw error
//             }
//         }

//         async findArticleById(userId: number): Promise<Articles[]> {
//             try {
//                 const articleUser = await this.repositoryArticle
//                     .createQueryBuilder("articles")
//                     .leftJoin("articles.users", "users")
//                     .addSelect(["users.id"])
//                     .where("users.id = :userId", { userId })
//                     .loadAllRelationIds()
//                     .getMany()

//                 return articleUser
//             } catch (error) {
//                 throw error
//             }
//         }

//         // ============== Delete Data Article ================

//         async delete(id: number): Promise<Articles> {
//             try {
//                 const articleToDelete = await this.repositoryArticle.findOne({
//                     where: { id },
//                 })

//                 if (!articleToDelete) {
//                     throw new Error("Article not found")
//                 }

//                 await this.repositoryArticle.remove(articleToDelete)

//                 await this.repositoryArticle
//                     .createQueryBuilder()
//                     .delete()
//                     // .from(Article)
//                     .where(articleToDelete)
//                     .execute()

//                 return articleToDelete
//             } catch (error) {
//                 throw error
//             }
//         }

//         async update(id: number, newData: any) {
//             try {
//                 const userId = newData.user.id

//                 await this.repositoryArticle.update(id, newData)

//                 const updateArticle = await this.repositoryArticle
//                     .createQueryBuilder("article")
//                     .leftJoin("article.users", "users")
//                     .addSelect(["users.id"])
//                     .where("articles.id = :id", { id })
//                     .getOne()

//                 if (!updateArticle) {
//                     throw new Error("Users not Found")
//                 }

//                 if (userId !== undefined) {
//                     updateArticle.users = userId
//                 }

//                 return updateArticle
//             } catch (error) {
//                 throw error
//             }
//         }

//     }
// )

import dataSource from "../dataSource";
import { Articles } from "../entities/Articel.entity";
import { Users } from "../entities/User.entity";

export default new (class ArticelService {
    repository = dataSource.getRepository(Articles);

    async AllArticles(): Promise<any> {
        try {
            const articles = await this.repository
                .createQueryBuilder("articles")
                .leftJoinAndSelect("articles.users", "users")
                .getMany();

            return articles;
        } catch (error) {
            throw error;
        }
    }

    async CreateArticle(reqBody: any): Promise<any> {
        try {
            // const usersId = reqBody.userId;

            const articles = this.repository.create({
                title: reqBody.title,
                slug: reqBody.slug,
                image: reqBody.image,
                content: reqBody.content,
                users: reqBody.users,
                userID: reqBody.userID
            });

            const savedArticles = await this.repository.save(articles);

            const articleWithUser = await this.repository
                .createQueryBuilder("articles")
                .leftJoinAndSelect("articles.users", "users")
                .where("articles.id = :id", { id: savedArticles.id })
                .loadAllRelationIds()
                .getOne();

            return articleWithUser;
        } catch (error) {
            throw error;
        }
    }

    async getUserArticleById(userId: number): Promise<Articles[]> {
        try {
            const articlesUser = await this.repository
                .createQueryBuilder("articles")
                .leftJoin("articles.users", "users")
                .addSelect(["users.id"])
                .where("users.id = :userId", { userId })
                .loadAllRelationIds()
                .getMany();

            return articlesUser;
        } catch (error) {
            throw error;
        }
    }

    async updateArticle(id: number, newData: any): Promise<Articles> {
        try {
            const userId = newData.users.id;

            await this.repository.update(id, newData);

            const updatedArticle = await this.repository
                .createQueryBuilder("article")
                .leftJoin("article.users", "users")
                .addSelect(["users.id"])
                .where("article.id = :id", { id })
                .getOne();

            if (!updatedArticle) {
                throw new Error("users not found");
            }

            if (userId !== undefined) {
                updatedArticle.users.id = userId;
            }
            return updatedArticle;
        } catch (error) {
            throw error;
        }
    }

    async patchArticle(id: number, newData: any): Promise<Articles> {
        try {
            const userId = newData.users.id;

            await this.repository.update(id, newData);

            const updatedArticle = await this.repository
                .createQueryBuilder("article")
                .leftJoin("article.users", "users")
                .addSelect(["users.id"])
                .where("article.id = :id", { id })
                .getOne();

            if (!updatedArticle) {
                throw new Error("users not found");
            }

            if (userId !== undefined) {
                updatedArticle.users.id = userId;
            }
            return updatedArticle;
        } catch (error) {
            throw error;
        }
    }

    async deleteArticle(id: number): Promise<Articles> {
        try {
            const deleteArticle = await this.repository.findOne({
                where: { id },
            });

            if (!deleteArticle) {
                throw new Error("Article not found");
            }

            await this.repository.remove(deleteArticle);

            await dataSource.getRepository(Articles)
                .createQueryBuilder()
                .delete()
                .where(deleteArticle)
                .execute();

            return deleteArticle;
        } catch (error) {
            throw error;
        }
    }
})();
