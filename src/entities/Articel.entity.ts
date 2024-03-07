import { Entity, PrimaryGeneratedColumn, Column, Collection } from "typeorm";


@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    slug: string

    
    @Column()
    image: string
    
    @Column({type:"text"})
    content: string
    
    @Column()
    user_id: number
    
    @Column({ default: () => "NOW()" })
    publication_date: Date

    @Column({ default: () => "NOW()" })
    create_at: Date

    @Column({ default: () => "NOW()" })
    updated_at: Date
}