import dataSource from "../dataSource"
import { Votes } from "../entities/Votes.entity"


export default new (class Votes {
    repository = dataSource.getRepository(Votes)

    async create(reqBody: any): Promise<any> {
        try {
            const votes = this.repository.create({
                users: reqBody.users,
                paslon: reqBody.paslon,
            })
        } catch (error) {
            throw error
        }
    }

    async find(): Promise<any> {
        try {
            const votes = await this.repository
                .createQueryBuilder("votes")
                .leftJoinAndSelect("votes.users", "users")
                .leftJoinAndSelect("votes.paslon", "paslon")
                .getMany()

            return votes
        } catch (error) {
            throw error
        }
    }
})