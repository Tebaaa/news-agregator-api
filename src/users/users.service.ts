import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}

  findAll() {
    return this.usersRepo.find({
      relations: ['news_saved'],
    });
  }
  async findOne(id: number) {
    const user = await this.usersRepo.findOne(id, {
      relations: ['news_saved'],
    });
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }
  async findOneByUsername(username: string) {
    const user = await this.usersRepo.findOne({ username: username });
    if (!user) {
      throw new NotFoundException(`User ${username} not found`);
    }
    return user;
  }
  async create(createUserDto: CreateUserDto) {
    const user = await this.usersRepo.findOne({
      username: createUserDto.username,
    });
    if (user) {
      throw new HttpException(
        'Username has already been taken',
        HttpStatus.CONFLICT,
      );
    }
    const newUser = this.usersRepo.create(createUserDto);
    return this.usersRepo.save(newUser);
  }
  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepo.preload({
      id: id,
      ...updateUserDto,
    });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return this.usersRepo.save(user);
  }
  async delete(id: number) {
    await this.findOne(id);
    return this.usersRepo.delete(id);
  }
}
