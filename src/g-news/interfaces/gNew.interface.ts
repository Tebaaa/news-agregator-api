export interface IGNew {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: Date;
  source: IGNewSource;
}
interface IGNewSource {
  name: string;
  url: string;
}
