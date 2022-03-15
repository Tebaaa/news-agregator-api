import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SavedNews } from './saved-news/entities/saved-news.entity';
import { SavedNewsService } from './saved-news/saved-news.service';

@Module({
  providers: [UsersService, SavedNewsService],
  exports: [UsersService],
  imports: [TypeOrmModule.forFeature([User, SavedNews])],
  controllers: [UsersController],
})
export class UsersModule {}
