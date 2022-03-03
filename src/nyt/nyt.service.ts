import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class NytService {
  constructor(private httpService: HttpService) {}
  nytSearchByWord(wordToSearch: string) {
    const NYTApiKey = '2bcYsou4gDujh39AZAQ5VsbXzHWcBpZs';
    const NYTApiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${wordToSearch}&api-key=${NYTApiKey}`;
    const NYTApiData = this.httpService
      .get(NYTApiUrl)
      ?.pipe(map((response) => response.data.response.docs));
    // console.log(NYTApiData.subscribe((x) => console.log(x)));
    return NYTApiData;
  }
  // nytPopularNews() {
  //   const NYTApiKey = '2bcYsou4gDujh39AZAQ5VsbXzHWcBpZs';
  //   const NYTApiUrl = `https://api.nytimes.com/svc/mostpopular/v2/shared/1.json?api-key=${NYTApiKey}`;
  //   const NYTApiData = this.httpService
  //     .get(NYTApiUrl)
  //     ?.pipe(map((response) => response.data));
  //   return NYTApiData;
  // }
}
