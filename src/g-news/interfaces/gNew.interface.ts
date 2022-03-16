/* eslint-disable @typescript-eslint/no-unused-vars */
interface GNew {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: Date;
  source: GNewSource;
}
interface GNewSource {
  name: string;
  url: string;
}
