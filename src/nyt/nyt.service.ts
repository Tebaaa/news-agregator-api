import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

import { NYTApiKey } from 'src/constants/constants';

@Injectable()
export class NytService {
  constructor(private httpService: HttpService) {}
  nytSearchByWord(wordToSearch: string) {
    const NYTApiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${wordToSearch}&api-key=${NYTApiKey}`;
    const NYTApiData = this.httpService
      .get(NYTApiUrl)
      ?.pipe(map((response) => response.data.response.docs));
    return NYTApiData;
  }
}
