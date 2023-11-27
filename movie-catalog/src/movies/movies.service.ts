import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRedis, setRedis } from 'src/redisConfig';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
  ) {}

  async createMovie(createMovie: CreateMovieDto): Promise<Movie> {
    const VerifyMovie = await this.movieRepository.findOne({
      where: { title: createMovie.title },
    });
    if (VerifyMovie) {
      throw new HttpException(
        'Filme já está cadastrado.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newMovie = this.movieRepository.create({ ...createMovie });
    await this.movieRepository.save(newMovie);
    await setRedis(`movie-${newMovie.id}`, JSON.stringify(newMovie));
    return newMovie;
  }

  async updateMovie(
    updateMovie: UpdateMovieDto,
    idMovie: number,
  ): Promise<string> {
    const movie = await this.movieRepository.findOne({
      where: { id: idMovie },
    });
    if (!movie) {
      throw new HttpException('Filme não encontrado', HttpStatus.NOT_FOUND);
    }
    await this.movieRepository.update(idMovie, {
      ...updateMovie,
    });
    await setRedis(`movie-${idMovie}`, JSON.stringify(Movie));
    return 'Filme atualizado com sucesso.';
  }

  async getAllMovies(): Promise<Movie[]> {
    const movies = await this.movieRepository.find();
    if (!movies) {
      throw new HttpException('Nenhum filme encontrado', HttpStatus.NOT_FOUND);
    }
    return movies;
  }

  async getMovieById(id: number): Promise<Movie> {
    const movie = await this.movieRepository.findOne({ where: { id } });
    if (!movie) {
      throw new HttpException('Filme não encontrado', HttpStatus.NOT_FOUND);
    }
    return movie;
  }

  async deleteMovie(id: number): Promise<string> {
    const movie = await this.movieRepository.findOne({ where: { id } });
    if (!movie) {
      throw new HttpException('Filme não encontrado', HttpStatus.NOT_FOUND);
    }
    await this.movieRepository.delete(id);
    await getRedis(`movie-${id}`);
    return 'Filme deletado com sucesso.';
  }
}
