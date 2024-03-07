import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Votes {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    candidate_id: number

    @Column()
    user_id: number

    @Column()
    createad_at: Date
}