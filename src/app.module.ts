import { Module } from '@nestjs/common';

import { NewsModule } from './news/news.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    
    NewsModule, 
    UsersModule, 
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
