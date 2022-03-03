import { Module } from '@nestjs/common';
import { GuardianModule } from 'src/guardian/guardian.module';
import { NytModule } from 'src/nyt/nyt.module';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';

@Module({
  controllers: [NewsController],
  providers: [NewsService],
  imports: [GuardianModule, NytModule],
})
export class NewsModule {}
