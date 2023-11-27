import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MoviesService } from './movies.service';

@ApiBearerAuth()
@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private movieService: MoviesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Rota para adicionar filmes' })
  @ApiResponse({
    status: 201,
    description: 'O filme foi adicionado com sucesso!',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request: Verifique os campos informados',
  })
  @ApiResponse({
    status: 401,
    description: 'As credenciais são inválidas',
  })
  async createMovie(
    @Body() createMovieDto: CreateMovieDto,
    @Res() res: Response,
  ) {
    const result = await this.movieService.createMovie(createMovieDto);
    return res.status(201).json({ message: result });
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  @ApiOperation({
    summary: 'Rota para atualizar dados de um filme presente na base de dados',
  })
  @ApiResponse({
    status: 200,
    description: 'As informações do filme foram atualizadas!',
  })
  @ApiResponse({
    status: 400,
    description: 'Mensagem informando qual propriedade gerou o erro',
  })
  @ApiResponse({
    status: 401,
    description: 'Token informado para a requisição é inválido',
  })
  @HttpCode(200)
  async updateMovie(
    @Body() updateMovieDto: UpdateMovieDto,
    @Res() res: Response,
    @Param('id') id: number,
  ) {
    const result = await this.movieService.updateMovie(updateMovieDto, id);
    return res.status(200).json({ message: result });
  }

  @UseGuards(JwtAuthGuard)
  @Get('')
  @ApiOperation({
    summary: 'Rota para retornar todos os filmes cadastrados',
  })
  @ApiResponse({ status: 200, description: 'Resultado da busca' })
  @ApiResponse({
    status: 401,
    description: 'As credenciais são inválidas',
  })
  @HttpCode(200)
  async getAllMovies() {
    return this.movieService.getAllMovies();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  @ApiOperation({
    summary:
      'Rota para encontrar filme pelo ID. Caso o filme não seja encontrado, retornará um erro',
  })
  @ApiResponse({
    status: 200,
    description: 'Retorna o filme encontrado com o ID informado na requisição',
  })
  @ApiResponse({
    status: 401,
    description: 'As credenciais são inválidas',
  })
  async getMovieById(@Param('id') id: number) {
    const movie = await this.movieService.getMovieById(id);
    return movie;
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  @ApiOperation({
    summary: 'Rota para deletar um filme pelo ID',
  })
  @ApiResponse({
    status: 200,
    description: 'O filme foi deletado com sucesso!',
  })
  @ApiResponse({
    status: 401,
    description: 'As credenciais são inválidas',
  })
  async deleteMovie(@Param('id') id: number, @Res() res: Response) {
    const result = await this.movieService.deleteMovie(id);
    return res.status(200).json({ message: result });
  }
}
