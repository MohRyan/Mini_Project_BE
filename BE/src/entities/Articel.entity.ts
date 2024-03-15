import { Entity, PrimaryGeneratedColumn, Column, Collection, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Users } from "./User.entity";


@Entity()
export class Articles {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    slug: string

    @CreateDateColumn()
    publication_date: Date

    @Column()
    image: string

    @Column()
    userID: number

    @Column({ type: "text" })
    content: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

    @ManyToOne(() => Users, (users) => users.article)
    @JoinColumn({ name: "userId", referencedColumnName: "id" })
    users: Users;
}