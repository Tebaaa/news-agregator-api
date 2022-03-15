import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/strategies/jwt-auth.guard';

import { port } from 'src/constants/constants';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Get()
  filterByQuery(@Query() params) {
    const { search, newspaper } = params;
    if (newspaper) return this.newsService.filterNewsPaper(newspaper, search);
    if (search) return this.newsService.searchByWord(search);
    const message = {
      statusCode: HttpStatus.BAD_REQUEST,
      message: `'search' query parameter is required. 'newspaper' query parameter is optional.`,
      example: `http://localhost:${port}/news?search=kitty`,
    };
    throw new HttpException(message, HttpStatus.BAD_REQUEST);
  }
}
