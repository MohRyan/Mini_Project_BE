// service for logic when app comunication to database
import dataSource from "../dataSource"
import { Users } from "../entities/User.entity"

export default new (class UserService {
  repositoryUsers = dataSource.getRepository(Users)

  // ================== Post Data Users ===================
  async create(reqBody: { firstName: string; lastName: string; date: any; gender: any; role: any; username: string; password: string }): Promise<any> {
    try {
      const users = this.repositoryUsers.create({
        firstName: reqBody.firstName,
        lastName: reqBody.lastName,
        gender: reqBody.gender,
        username: reqBody.username,
        password: reqBody.password,
        role: reqBody.role
      })

      await dataSource
        .getRepository(Users)
        .createQueryBuilder()
        .insert()
        .into(Users)
        .values(users)
        .execute()

      return users
    } catch (error) {
      throw error
    }
  }

  // ================== Get Data Users ===================

  async find(): Promise<any> {
    try {
      const users = await dataSource
        .getRepository(Users)
        .createQueryBuilder("users")
        .getMany()

      return users
    } catch (error) {
      throw error
    }
  }

  async login(username: string, password: string): Promise<any> {
    try {
      const userLogin = await this.repositoryUsers.findOne({
        where: {
          username,
          password
        }
      })

      // const id = userLogin?.id
      // const role = userLogin?.role

      // return { id, role }
      return userLogin

    } catch (error) {
      throw error
    }
  }

  // ================== Delete Data Users ===================

  async delete(id: number): Promise<any> {
    try {

      const userToDelete = await this.repositoryUsers.findOne({
        where: { id },
      })

      if (!userToDelete) {
        throw new Error("User not found")
      }

      await this.repositoryUsers.remove(userToDelete)

      await dataSource
        .createQueryBuilder()
        .delete()
        .from(Users)
        .where(userToDelete)
        .execute()

      return userToDelete
    } catch (error) {
      throw error
    }
  }

  // ================== Update Data Users ===================

  async update(id: number, newData: any): Promise<any> {
    try {
      const userUpdate = await this.repositoryUsers.findOne({
        where: { id },
      })

      if (!userUpdate) {
        throw new Error("User not found")
      }

      Object.assign(userUpdate, newData)

      const UpdateUser = await this.repositoryUsers.save(userUpdate)

      return UpdateUser
    } catch (error) {
      throw error
    }
  }

  // .createQueryBuilder()
  //   .update(User)
  //   .set({ firstName: "Timber", lastName: "Saw" })
  //   .where("id = :id", { id: 1 })
  //   .execute()

}
)