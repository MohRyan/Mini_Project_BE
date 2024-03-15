import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Users } from "./User.entity";
import { Paslon } from "./Paslon.entity";


@Entity()
export class Votes {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    users: number

    @Column()
    paslon: number

    @OneToOne(() => Users)
    @JoinColumn()
    user: Users

    @OneToOne(() => Paslon)
    @JoinColumn()
    pas: Paslon
}