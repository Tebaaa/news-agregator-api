import { INew } from 'src/news/interfaces/news.interface';
import { INYTNew } from 'src/news-apis/nyt/interfaces/nytNew.interface';

export class NYTNewToGenericNew implements INew {
  title: string;
  url: string;
  publication_date: Date;
  data_source: string;
  constructor(nytNew: INYTNew) {
    this.title = nytNew.headline.main;
    this.url = nytNew.web_url;
    this.publication_date = new Date(nytNew.pub_date);
    this.data_source = 'New York Times';
  }
}
