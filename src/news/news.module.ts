import { Module } from '@nestjs/common';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { GNewsModule } from 'src/news-apis/g-news/g-news.module';
import { GuardianModule } from 'src/news-apis/guardian/guardian.module';
import { NytModule } from 'src/news-apis/nyt/nyt.module';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';

@Module({
  controllers: [NewsController],
  providers: [NewsService],
  imports: [GuardianModule, NytModule, GNewsModule, JwtStrategy],
})
export class NewsModule {}
