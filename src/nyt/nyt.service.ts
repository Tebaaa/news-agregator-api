import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

import { NYTApiKey } from 'src/constants/constants';
import { INew } from 'src/news/interfaces/news.interface';
import { INYTNew } from './interfaces/nytNew.interface';

@Injectable()
export class NytService {
  constructor(private httpService: HttpService) {}
  async nytSearchByWord(wordToSearch: string) {
    const NYTApiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${wordToSearch}&api-key=${NYTApiKey}`;
    const NYTApiData: INYTNew[] = await lastValueFrom(
      this.httpService
        .get(NYTApiUrl)
        ?.pipe(map((response) => response.data.response.docs)),
    );
    const news: INew[] = NYTApiData.map((currentNytNew) => {
      return {
        title: currentNytNew.headline.main,
        url: currentNytNew.web_url,
        publication_date: new Date(currentNytNew.pub_date),
        data_source: 'NYT',
      };
    });
    return news;
  }
}
