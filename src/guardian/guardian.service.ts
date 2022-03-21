import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

import { guardianApiKey } from 'src/constants/constants';
import { INew } from 'src/news/interfaces/news.interface';
import { IGuardianNew } from './interfaces/guardianNew.interface';

@Injectable()
export class GuardianService {
  constructor(private httpService: HttpService) {}
  async guardianSearchByWord(wordToSearch: string) {
    const guardianApiUrl = `https://content.guardianapis.com/search?q=${wordToSearch}&api-key=${guardianApiKey}`;
    const guardianApiData: IGuardianNew[] = await lastValueFrom(
      this.httpService
        .get(guardianApiUrl)
        ?.pipe(map((response) => response.data.response.results)),
    );
    const news: INew[] = guardianApiData.map((currentGuardianNew) => {
      return {
        title: currentGuardianNew.webTitle,
        url: currentGuardianNew.webUrl,
        publication_date: new Date(currentGuardianNew.webPublicationDate),
        data_source: 'The Guardian',
      };
    });
    return news;
  }
}
