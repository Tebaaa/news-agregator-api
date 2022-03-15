import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaveNewDto } from './dto/save-new.dto';
import { SavedNews } from './entities/saved-news.entity';

@Injectable()
export class SavedNewsService {
  constructor(
    @InjectRepository(SavedNews) private savedNewsRepo: Repository<SavedNews>,
  ) {}

  findAll() {
    return this.savedNewsRepo.find();
  }
  async create(newToSave: SaveNewDto, id: number) {
    const existingNew = await this.savedNewsRepo.findOne({
      url_new: newToSave.url_new,
      user_id: id,
    });
    if (existingNew) {
      throw new HttpException(
        'The new has already been saved',
        HttpStatus.CONFLICT,
      );
    }
    const newNew = this.savedNewsRepo.create({
      url_new: newToSave.url_new,
      user_id: id,
    });
    return this.savedNewsRepo.save(newNew);
  }
}
