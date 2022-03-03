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
  // searchByWord(wordToSearch: string) {
  //   const guardianData =
  //     this.guardianService.guardianSearchByWord(wordToSearch);
  //   const NYTData = this.nytService.nytSearchByWord(wordToSearch);
  //   return guardianData;
  // }
}