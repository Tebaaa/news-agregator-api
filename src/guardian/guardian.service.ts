import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

import { guardianApiKey } from 'src/constants/constants';

@Injectable()
export class GuardianService {
  constructor(private httpService: HttpService) {}
  async guardianSearchByWord(wordToSearch: string) {
    const guardianApiUrl = `https://content.guardianapis.com/search?q=${wordToSearch}&api-key=${guardianApiKey}`;
    const guardianApiData: GuardianNew[] = await lastValueFrom(
      this.httpService
        .get(guardianApiUrl)
        ?.pipe(map((response) => response.data.response.results)),
    );
    const news: INew[] = guardianApiData.map((currentGuardianNew) => {
      return {
        title: currentGuardianNew.webTitle,
        url: currentGuardianNew.webUrl,
        publication_date: new Date(currentGuardianNew.webPublicationDate),
      };
    });
    return news;
  }
}
