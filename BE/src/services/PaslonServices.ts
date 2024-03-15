// service for logic when app comunication to database
import dataSource from "../dataSource"
import { Paslon } from "../entities/Paslon.entity"

export default new (class PaslonService {
    repositoryPaslon = dataSource.getRepository(Paslon)

    // ================== Post Data Partai ===================
    async create(reqBody: { no: number; image: string; name: string; visimisi: string; koalisi: any }): Promise<any> {
        try {
            const paslon = this.repositoryPaslon.create({
                no: reqBody.no,
                image: reqBody.image,
                name: reqBody.name,
                visimisi: reqBody.visimisi,
                koalisi: reqBody.koalisi,
            })

            await dataSource
                .getRepository(Paslon)
                .createQueryBuilder()
                .insert()
                .into(Paslon)
                .values(paslon)
                .execute()

            return paslon
        } catch (error) {
            throw error
        }
    }

    // ================== Get Data Partai ===================

    async find(): Promise<any> {
        try {
            const paslon = await dataSource
                .getRepository(Paslon)
                .createQueryBuilder("users")
                .getMany()

            return paslon
        } catch (error) {
            throw error
        }
    }
    // ================== Delete Data Partai ===================

    async delete(id: number): Promise<any> {
        try {

            const paslonToDelete = await this.repositoryPaslon.findOne({
                where: { id },
            })

            if (!paslonToDelete) {
                throw new Error("Partai not found")
            }

            await this.repositoryPaslon.remove(paslonToDelete)

            await dataSource
                .createQueryBuilder()
                .delete()
                .from(Paslon)
                .where(paslonToDelete)
                .execute()

            return paslonToDelete
        } catch (error) {
            throw error
        }
    }

    // ================== Update Data Users ===================

    async update(id: number, newData: any): Promise<any> {
        try {
            const paslonUpdate = await this.repositoryPaslon.findOne({
                where: { id },
            })

            if (!paslonUpdate) {
                throw new Error("User not found")
            }

            Object.assign(paslonUpdate, newData)

            const UpdatePaslon = await this.repositoryPaslon.save(paslonUpdate)

            return UpdatePaslon
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