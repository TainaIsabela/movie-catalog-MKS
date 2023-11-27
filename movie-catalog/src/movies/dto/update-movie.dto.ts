import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UpdateMovieDto {
  @ApiPropertyOptional({
    description:
      'Irá atualizar o nome do filme com o que for inserido nesse campo, caso tenha sido informado',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiPropertyOptional({
    description:
      'Irá atualizar o gênero do filme com o que for inserido nesse campo, caso tenha sido informado',
  })
  @IsNotEmpty()
  @IsString()
  genre: string;

  @ApiPropertyOptional({
    description:
      'Irá atualizar o ano de lançamento do filme com o que for inserido neste campo, caso este seja informado',
    example: '2011',
  })
  @IsNotEmpty()
  @IsNumber()
  year: string;

  @ApiProperty({
    description:
      'Irá atualizar a sinopse do filme com o que for inserido nesse campo, caso tenha sido informado',
  })
  @IsNotEmpty()
  @IsString()
  sinopsis: string;
}
