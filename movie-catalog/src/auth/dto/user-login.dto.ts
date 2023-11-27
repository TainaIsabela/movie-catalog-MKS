import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDto {
    @ApiProperty({
        description: 'Email do usuário cadastrado',
        example: 'tainaisabela@gmail.com'
    })
    email: string;

    @ApiProperty({
        description: 'Senha do usuário cadastrado',
        example: 'senha123'
    })
    password: string;
}