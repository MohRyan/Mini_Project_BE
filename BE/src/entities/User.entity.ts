import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Articles } from "./Articel.entity";

enum UserRoles {
  User = "user",
  Admin = "admin"
}

enum UserGender {
  Male = "pria",
  Female = "wanita"
}

@Entity({ name: "users" })
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: "enum", enum: UserGender, default: UserGender.Male })
  gender: UserGender;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ type: "enum", enum: UserRoles, default: UserRoles.User })
  role: UserRoles;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updated_at: Date;

  @OneToMany(() => Articles, (articles) => articles.users)
  article: Articles[];
}
