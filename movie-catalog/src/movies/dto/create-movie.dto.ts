import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateMovieDto {
  @ApiProperty({
    description: 'O titulo do filme',
    example: 'A noite das bruxas',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'O gênero do filme',
    example: 'Terror, Ficção, Suspense',
  })
  @IsString()
  @IsNotEmpty()
  genre: string;

  @ApiProperty({
    description: 'O ano de lançamento do filme',
    example: '2023',
  })
  @IsNumber()
  @IsNotEmpty()
  year: string;

  @ApiProperty({
    description: 'A sinopse do filme',
    example:
      'O detetive belga Hercule Poirot investiga um assassinato enquanto participa de uma sessão espírita de Halloween em um palazzo assombrado em Veneza, Itália.',
  })
  @IsString()
  @IsNotEmpty()
  sinopsis: string;
}
