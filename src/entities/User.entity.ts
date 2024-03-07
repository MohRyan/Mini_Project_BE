import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"; 


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    date: string

    @Column()
    gender: "Man" | "Girl"

    @Column()
    role: "Users" | "Admin"

    @Column()
    username: string

    @Column()
    password: string
}