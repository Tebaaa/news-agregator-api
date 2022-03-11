import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GNewsService } from './g-news.service';

@Module({
  providers: [GNewsService],
  imports: [HttpModule],
  exports: [GNewsService],
})
export class GNewsModule {}
