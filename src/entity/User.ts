import * as bcrypt from 'bcryptjs';
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    length: '11',
    unique: true,
  })
  cpf: string;

  @Column()
  password: string;

  @Column()
  phone_number: string;

  @Column()
  birthday: Date;

  @Column()
  created_at: Date;

  @BeforeInsert()
  procedure() {
    this.created_at = new Date();
    this.password = bcrypt.hashSync(this.password);
  }
}
