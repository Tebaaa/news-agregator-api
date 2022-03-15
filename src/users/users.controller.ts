import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { SaveNewDto } from './saved-news/dto/save-new.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SavedNewsService } from './saved-news/saved-news.service';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/strategies/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService,
    private savedNewsService: SavedNewsService,
  ) {}

  @Get()
  getAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/news')
  findAll(@Request() req, @Param('id') id: number) {
    const authenticatedUserId = req.user.userId;
    if (authenticatedUserId === id) {
      return this.savedNewsService.findAll();
    }
    throw new HttpException(
      'You are authenticated with a different ID',
      HttpStatus.UNAUTHORIZED,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/news')
  createNew(
    @Param('id') id: number,
    @Body() newToSave: SaveNewDto,
    @Request() req,
  ) {
    const authenticatedUserId = req.user.userId;
    if (authenticatedUserId === id) {
      return this.savedNewsService.create(newToSave, id);
    }
    throw new HttpException(
      'You are authenticated with a different ID',
      HttpStatus.UNAUTHORIZED,
    );
  }
}
