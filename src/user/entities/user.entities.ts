import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('users')
@Unique(['user_name'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;
  @Column()
  user_name: string;
  @Column()
  email: string;
  @Column()
  password: string;
}
