import { Module } from '@nestjs/common';
import { GNewsModule } from 'src/g-news/g-news.module';
import { GuardianModule } from 'src/guardian/guardian.module';
import { NytModule } from 'src/nyt/nyt.module';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';

@Module({
  controllers: [NewsController],
  providers: [NewsService],
  imports: [GuardianModule, NytModule, GNewsModule],
})
export class NewsModule {}
