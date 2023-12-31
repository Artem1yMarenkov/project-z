import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'string' })
  login: string;

  @Column({ type: 'string' })
  password: string;

  @Column({ type: 'string', unique: true })
  email: string;

  @Column({ default: true, type: 'boolean' })
  isActive: boolean;
}
