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

  constructor(name: string, username: string, password: string, id?: string) {
    this.id = id ?? uuid();
    this.name = name;
    this.username = username;
    this.password = password;
  }
}
