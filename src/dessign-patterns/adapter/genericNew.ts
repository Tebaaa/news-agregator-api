export class GenericNew implements INew {
  title: string;
  url: string;
  publication_date: Date;
  data_source: string;
  // constructor(title, url, pubDate, dataSource) {
  //   this.title = title;
  //   this.url = url;
  //   this.publication_date = pubDate;
  //   this.data_source = dataSource;
  // }
  setTitle(title: string) {
    this.title = title;
  }
  getTitle() {
    return this.title;
  }
  setUrl(url: string) {
    this.url = url;
  }
  getUrl() {
    return this.url;
  }
  setPublicationDate(publicationDate: Date) {
    this.publication_date = publicationDate;
  }
  getPublicationDate() {
    return this.publication_date;
  }
  setSource(source: string) {
    this.data_source = source;
  }
  getSource() {
    return this.data_source;
  }
}

export class GNewToGenericAdapter extends GenericNew {
  gNew: IGNew;
  constructor(gNew: IGNew) {
    super();
    this.gNew = gNew;
  }
  getTitle(): string {
    return this.gNew.title;
  }
  getUrl(): string {
    return this.gNew.url;
  }
  getPublicationDate(): Date {
    return this.gNew.publishedAt;
  }
  getSource(): string {
    return this.gNew.source.name;
  }
}
