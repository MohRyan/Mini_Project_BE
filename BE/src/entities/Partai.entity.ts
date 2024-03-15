import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Partai {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    no: number

    @Column()
    logo: string

    @Column()
    ketum: string


    @Column()
    visimisi: string

    // @Column("text", { array: true })
    // visimisi: string[]

    @Column()
    address: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}