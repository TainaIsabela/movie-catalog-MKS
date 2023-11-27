import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';
import { User } from 'src/users/user.entity';
import { Movie } from 'src/movies/movie.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ['./**/*.entity.ts'],
  migrations: ['./src/db/migrations/*.ts'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
