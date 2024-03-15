import { Request, Response } from "express";
import PartaiServices from "../services/PartaiServices"

export default new class PartaiControllers {
    // ====================  Post Partai ======================
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body

            const partai = await PartaiServices.create(data)

            return res.status(200).json({ data: partai })
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }

    // ====================  Get Partai ======================
    async find(req: Request, res: Response): Promise<Response> {
        try {
            const partai = await PartaiServices.find()

            return res.status(200).json({ data: partai })
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }


    // ====================  Delete Partai ======================
    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const partai_id = parseInt(req.params.id)
            const deletePartai = await PartaiServices.delete(partai_id)

            return res.status(200).json({ data: deletePartai })
        } catch (error) {
            return res.status(500).json({ message: "Error Delete" })
        }
    }

    // ====================  Update Partai ======================
    async update(req: Request, res: Response): Promise<Response> {
        try {
            const partai_id = parseInt(req.params.id)
            const newData = req.body
            const updatePartai = await PartaiServices.update(partai_id, newData)

            return res.status(200).json({ data: updatePartai, message: "Update Success!!" })
        } catch (error) {
            return res.status(500).json({ message: "Error Update" })
        }
    }
}