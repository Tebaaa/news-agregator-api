import { IGNew } from 'src/news-apis/g-news/interfaces/gNew.interface';
import { INew } from 'src/news/interfaces/news.interface';

export class GNewToGenericNew implements INew {
  title: string;
  url: string;
  publication_date: Date;
  data_source: string;
  constructor(gNew: IGNew) {
    this.title = gNew.title;
    this.url = gNew.url;
    this.publication_date = gNew.publishedAt;
    this.data_source = gNew.source.name;
  }
}
