import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../entities/user.entity';

@Entity()
export class SavedNews {
  @PrimaryGeneratedColumn()
  relation_id: number;
  @Column()
  url_new: string;
  @Column()
  user_id: number;
  @ManyToOne((type) => User, (user) => user.news_saved, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
