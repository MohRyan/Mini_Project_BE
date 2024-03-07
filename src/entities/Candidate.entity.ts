import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Candidate {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    nomor_urut: number

    @Column("text")
    visi_misi: string

    @Column()
    created_at: Date
}