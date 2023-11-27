import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post()
  @ApiOperation({ summary: 'Rota para criar um usuário novo' })
  @ApiResponse({
    status: 201,
    description: 'O usuário foi criado com sucesso.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request: Verifique os campos informados',
  })
  async createUser(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const result = await this.userService.createUser(createUserDto);
    return res.status(201).json({ message: result });
  }
}
