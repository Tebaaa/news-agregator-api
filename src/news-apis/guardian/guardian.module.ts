import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GuardianService } from './guardian.service';

@Module({
  providers: [GuardianService],
  imports: [HttpModule],
  exports: [GuardianService],
})
export class GuardianModule {}
