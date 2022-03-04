import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GuardianService } from 'src/guardian/guardian.service';
import { NytService } from 'src/nyt/nyt.service';

@Injectable()
export class NewsService {
  constructor(
    private nytService: NytService,
    private guardianService: GuardianService,
  ) {}
  async filterNewsPaper(newsPaper: newsPaper, wordToSearch: string) {
    if (!wordToSearch) {
      const message = {
        statusCode: HttpStatus.BAD_REQUEST,
        message: `The 'search' query parameter can't be empty`,
      };
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }
    if (newsPaper === 'nyt') {
      const NYTData = this.nytService.nytSearchByWord(wordToSearch);
      return NYTData;
    }
    if (newsPaper === 'guardian') {
      const guardianData =
        this.guardianService.guardianSearchByWord(wordToSearch);
      return guardianData;
    }
    const message = {
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'Not valid newspaper value',
      acceptedValues: ['guardian', 'nyt'],
    };
    throw new HttpException(message, HttpStatus.BAD_REQUEST);
  }
  async searchByWord(wordToSearch: string) {
    const guardianData = await this.guardianService.guardianSearchByWord(
      wordToSearch,
    );
    const NYTData = await this.nytService.nytSearchByWord(wordToSearch);
    return guardianData.concat(NYTData);
  }
}
