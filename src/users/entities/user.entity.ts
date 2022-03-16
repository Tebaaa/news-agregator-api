import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SavedNews } from '../saved-news/entities/saved-news.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany((type) => SavedNews, (savedNew) => savedNew.user, {
    onDelete: 'CASCADE',
  })
  news_saved: SavedNews[];
}
