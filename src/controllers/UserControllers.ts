import { Request, Response} from "express";
import UserServices from "../services/UserServices";

export default new class UserControllers {
  // ====================  Post User ======================
  async create(req: Request, res: Response) : Promise<Response> {
    try {
      const data = req.body
      
      const user = await UserServices.create(data)
      
      return res.status(200).json(user)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
  
  // ====================  Get User ======================
  async find(req: Request, res: Response) : Promise<Response> {
    try {
      const users = await UserServices.find()
      
      return res.status(200).json(users)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
  
  // ====================  Delete User ======================
  async delete(req:Request, res: Response):Promise<Response>{
    try {
      const user_id = parseInt(req.params.id)
      const deleteUser = await UserServices.delete(user_id)
      
      return res.status(200).json(deleteUser)
    } catch (error) {
      return res.status(500).json({message: "Error Delete"})
    }
  }
  
  // ====================  Update User ======================
  async update(req:Request, res: Response):Promise<Response>{
    try {
      const user_id = parseInt(req.params.id)
      const updateUser = await UserServices.update(req.body,user_id)

      return res.status(200).json(updateUser)
    } catch (error) {
      return res.status(500).json({message: "Error Update"})
    }
  }
}