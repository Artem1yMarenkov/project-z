import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  login: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;
}
