import { Request, Response } from "express";
import UserServices from "../services/UserServices";

export default new class UserControllers {
  // ====================  Post User ======================
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body

      const user = await UserServices.create(data)

      return res.status(200).json(user)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  // ====================  Get User ======================
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const users = await UserServices.find()

      return res.status(200).json(users)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
  async findUser(req: Request, res: Response): Promise<Response> {
    try {
      const user = await UserServices.findUser()

      return res.status(200).json(user)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
  async findAdmin(req: Request, res: Response): Promise<Response> {
    try {
      const admin = await UserServices.findAdmin()

      return res.status(200).json(admin)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
  // async findAdminWithId(req: Request, res: Response): Promise<Response> {
  //   try {
  //     const user_id = parseInt(req.params.id)
  //     const admin = await UserServices.findAdminWithId(user_id)

  //     return res.status(200).json(admin)
  //   } catch (error) {
  //     return res.status(500).json({ message: error })
  //   }
  // }

  async login(req: Request, res: Response): Promise<Response> {
    try {
      const { username, password } = req.body

      if (!username || !password) {
        return res.status(500).json({ message: "Invalid Username or password" })
      }

      const userLogin = await UserServices.login(username, password)

      return res.status(200).json({ data: userLogin })
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  // ====================  Delete User ======================
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const user_id = parseInt(req.params.id)
      const deleteUser = await UserServices.delete(user_id)

      return res.status(200).json(deleteUser)
    } catch (error) {
      return res.status(500).json({ message: "Error Delete" })
    }
  }

  // ====================  Update User ======================
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const user_id = parseInt(req.params.id)
      const newData = req.body
      const updateUser = await UserServices.update(user_id, newData)

      return res.status(200).json({ data: updateUser, message: "Update Success!!" })
    } catch (error) {
      return res.status(500).json({ message: "Error Update" })
    }
  }
}