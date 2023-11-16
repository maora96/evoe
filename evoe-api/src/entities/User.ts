import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  username: string;

  @Column({ type: "text" })
  password: string;

  @Column({ type: "text", nullable: true })
  cpf: string;

  @Column({ type: "timestamp", nullable: true })
  birthdate: Date;

  @Column({ type: "text", nullable: true })
  bio: string;

  @Column({ type: "text", nullable: true })
  twitter: string;

  @Column({ type: "text", nullable: true })
  instagram: string;

  @Column({ type: "text", nullable: true })
  facebook: string;

  @Column({ type: "text", nullable: true })
  tiktok: string;

  @Column({ type: "text", nullable: true })
  website: string;

  @Column({ type: "text", nullable: true })
  profile_pic: string;

  constructor(name: string, username: string, password: string, id?: string) {
    this.id = id ?? uuid();
    this.name = name;
    this.username = username;
    this.password = password;
  }
}
