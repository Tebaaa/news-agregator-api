export const NYTApiKey =
  process.env.NYT_API_KEY || '2bcYsou4gDujh39AZAQ5VsbXzHWcBpZs';
export const guardianApiKey =
  process.env.GUARDIAN_API_KEY || '6df96c84-1a3f-4b41-b9eb-22e4300af047';
export const port = process.env.PORT || 3000;
export const gNewsApiKey =
  process.env.G_NEWS_API_KEY || 'ca467818fc58d75e243f739fd7d1ee9e';
export const dbPort = parseInt(process.env.DB_PORT) || 5432;
export const dbUsername = process.env.DB_USERNAME || 'teba';
export const dbPassword = process.env.DB_PASSWORD || 'admin';
export const dbName = process.env.DB_NAME || 'news_agregator';
