import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Paslon {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    no: number

    @Column()
    image: string

    @Column()
    name: string

    @Column()
    visimisi: string

    @Column()
    koalisi: string

    // @Column("text", { array: true })
    // visimisi: string[]

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}