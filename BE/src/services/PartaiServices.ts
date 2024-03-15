// service for logic when app comunication to database
import dataSource from "../dataSource"
import { Partai } from "../entities/Partai.entity"
export default new (class PartaiService {
    repositoryPartai = dataSource.getRepository(Partai)

    // ================== Post Data Partai ===================
    async create(reqBody: { no: number; logo: string; ketum: string; visimisi: string; address: string }): Promise<any> {
        try {
            const partai = this.repositoryPartai.create({
                no: reqBody.no,
                logo: reqBody.logo,
                ketum: reqBody.ketum,
                visimisi: reqBody.visimisi,
                address: reqBody.address
            })

            await dataSource
                .getRepository(Partai)
                .createQueryBuilder()
                .insert()
                .into(Partai)
                .values(partai)
                .execute()

            return partai
        } catch (error) {
            throw error
        }
    }

    // ================== Get Data Partai ===================

    async find(): Promise<any> {
        try {
            const partai = await dataSource
                .getRepository(Partai)
                .createQueryBuilder("users")
                .getMany()

            return partai
        } catch (error) {
            throw error
        }
    }
    // ================== Delete Data Partai ===================

    async delete(id: number): Promise<any> {
        try {

            const partaiToDelete = await this.repositoryPartai.findOne({
                where: { id },
            })

            if (!partaiToDelete) {
                throw new Error("Partai not found")
            }

            await this.repositoryPartai.remove(partaiToDelete)

            await dataSource
                .createQueryBuilder()
                .delete()
                .from(Partai)
                .where(partaiToDelete)
                .execute()

            return partaiToDelete
        } catch (error) {
            throw error
        }
    }

    // ================== Update Data Users ===================

    async update(id: number, newData: any): Promise<any> {
        try {
            const partaiUpdate = await this.repositoryPartai.findOne({
                where: { id },
            })

            if (!partaiUpdate) {
                throw new Error("User not found")
            }

            Object.assign(partaiUpdate, newData)

            const UpdatePartai = await this.repositoryPartai.save(partaiUpdate)

            return UpdatePartai
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