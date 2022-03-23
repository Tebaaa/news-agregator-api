import { IGuardianNew } from 'src/news-apis/guardian/interfaces/guardianNew.interface';
import { INew } from 'src/news/interfaces/news.interface';

export class GuardianNewToGenericNew implements INew {
  title: string;
  url: string;
  publication_date: Date;
  data_source: string;
  constructor(guardianNew: IGuardianNew) {
    this.title = guardianNew.webTitle;
    this.url = guardianNew.webUrl;
    this.publication_date = new Date(guardianNew.webPublicationDate);
    this.data_source = 'The Guardian';
  }
}
