/* eslint-disable @typescript-eslint/no-unused-vars */
interface NYTNew {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  print_section: string;
  print_page: string;
  source: string;
  multimedia: any[];
  headline: {
    main: string;
    kicker: any;
    content_kicker: any;
    print_headline: string;
    name: any;
    seo: any;
    sub: any;
  };
  keywords: any[];
  pub_date: Date;
  document_type: string;
  news_desk: string;
  section_name: string;
  subsection_name: string;
  byline: any;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
}
