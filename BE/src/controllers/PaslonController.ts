import { Request, Response } from "express";
import PaslonServices from "../services/PaslonServices"

export default new class PartaiControllers {
    // ====================  Post Paslon ======================
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body

            const Paslon = await PaslonServices.create(data)

            return res.status(200).json({ data: Paslon })
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }

    // ====================  Get Paslon ======================
    async find(req: Request, res: Response): Promise<Response> {
        try {
            const Paslon = await PaslonServices.find()

            return res.status(200).json({ data: Paslon })
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }


    // ====================  Delete Paslon ======================
    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const Paslon_id = parseInt(req.params.id)
            const deletePaslon = await PaslonServices.delete(Paslon_id)

            return res.status(200).json(deletePaslon)
        } catch (error) {
            return res.status(500).json({ message: "Error Delete" })
        }
    }

    // ====================  Update Paslon ======================
    async update(req: Request, res: Response): Promise<Response> {
        try {
            const Paslon_id = parseInt(req.params.id)
            const newData = req.body
            const updatePaslon = await PaslonServices.update(Paslon_id, newData)

            return res.status(200).json({ data: updatePaslon, message: "Update Success!!" })
        } catch (error) {
            return res.status(500).json({ message: "Error Update" })
        }
    }
}