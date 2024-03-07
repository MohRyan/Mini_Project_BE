// service for logic when app comunication to database

import  dataSource  from "../dataSource"
import { User } from "../entities/User.entity"

export default new class UserService {


  // ================== Post Data Users ===================
  async create(reqBody: { firstName: string; lastName: string; date: any; gender: any; role: any; username: string; password: string } ) : Promise<any> {
    try {
      const repositoryUsers = dataSource.getRepository(User)
      const user = repositoryUsers.create({
        firstName:reqBody.firstName,
        lastName:reqBody.lastName,
        date:reqBody.date,
        gender: reqBody.gender,
        role: reqBody.role,
        username: reqBody.username,
        password: reqBody.password
      })

      await dataSource
        .getRepository(User)
        .createQueryBuilder()
        .insert()
        .into(User)
        .values(user)
        .execute()

      return user
    } catch (error) {
      throw error
    }
  }
  
  // ================== Get Data Users ===================

  async find() : Promise<any> {
    try {
      const users = await dataSource
      .getRepository(User)
      .createQueryBuilder("user")
      .getMany()
      
      return users
    } catch (error) {
      throw error
    }
  }

  // ================== Delete Data Users ===================

  async delete(id: number) : Promise<any>{
    try {
      const repositoryUsers = dataSource.getRepository(User)
      const userToDelete = await repositoryUsers.findOne({
        where: { id },
      })

      if (!userToDelete){
        throw new Error("User not found")
      }

      await repositoryUsers.remove(userToDelete)
      

      await dataSource
      .createQueryBuilder()
      .delete()
      .from(User)
      .where(userToDelete)
      .execute()


      return userToDelete
    } catch (error){
      throw error
    }
  }

  // ================== Update Data Users ===================

  async update(reqBody: { firstName: any; lastName: any; date: any; gender: any; role: any; username: any; password: any; }, id:number): Promise<any>{
    try{
      const repositoryUsers = dataSource.getRepository(User)
      const Update = repositoryUsers.create({
        firstName:reqBody.firstName,
        lastName:reqBody.lastName,
        date:reqBody.date,
        gender: reqBody.gender,
        role: reqBody.role,
        username: reqBody.username,
        password: reqBody.password
      })
      const userUpdate = await repositoryUsers.findOne({
        where: {id},
      })      

      if (!userUpdate){
        throw new Error("User not found")
      }
      await repositoryUsers.update({id},Update)

      dataSource
        .createQueryBuilder()
        .update(User)
        .set(Update)
        .where(userUpdate)
        .execute()
    } catch (error){
      throw error
    }
  }

  // .createQueryBuilder()
  //   .update(User)
  //   .set({ firstName: "Timber", lastName: "Saw" })
  //   .where("id = :id", { id: 1 })
  //   .execute()

}