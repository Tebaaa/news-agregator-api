import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { gNewsApiKey } from 'src/constants/constants';
import { adaptersChain } from 'src/dessign-patterns/adapter-chain';
import { INew } from 'src/news/interfaces/news.interface';
import { IGNew } from './interfaces/gNew.interface';

@Injectable()
export class GNewsService {
  constructor(private httpService: HttpService) {}
  async gNewsSearchByWord(wordToSearch: string) {
    const gNewsApiUrl = `https://gnews.io/api/v4/search?q=${wordToSearch}&token=${gNewsApiKey}`;
    const gNewsApiData: IGNew[] = await lastValueFrom(
      this.httpService
        .get(gNewsApiUrl)
        ?.pipe(map((response) => response.data.articles)),
    );
    const news: INew[] = gNewsApiData.map((currentGNew) => {
      return adaptersChain(currentGNew);
    });
    return news;
  }
}
