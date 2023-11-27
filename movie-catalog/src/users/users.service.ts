import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { setRedis } from 'src/redisConfig';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(createUser: CreateUserDto): Promise<string> {
    const newUser = this.userRepository.create({
      ...createUser,
    });
    await this.userRepository.save(newUser);
    await setRedis(`user-${newUser.id}`, JSON.stringify(newUser));
    return 'O usuário foi criado com sucesso!';
  }

  async getUserByEmail(email: string): Promise<User> {
    return await this.userRepository.findOneBy({ email });
  }
}
