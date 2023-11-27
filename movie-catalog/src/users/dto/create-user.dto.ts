import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'Tainá Isabela',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Email do usuário. O email é utilizado no login do usuário',
    example: 'tainaisabela@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Senha do usuário. É utilizado para login do usuário',
    example: 'senhasecreta',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
