import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { NytService } from './nyt.service';

@Module({
  imports: [HttpModule],
  providers: [NytService],
  exports: [NytService],
})
export class NytModule {}
