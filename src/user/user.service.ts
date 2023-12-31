import { Injectable } from '@nestjs/common';
import { UserCreateDto, UserLoginDto, UserUpdateDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private _userRepository: Repository<User>,
  ) {}

  async create(user: UserCreateDto) {
    const newUser = new User();

    newUser.email = user.email;
    newUser.login = user.login;
    newUser.password = user.password;

    this._userRepository.save(newUser);

    return newUser;
  }

  async delete(user: UserUpdateDto) {}

  async update(user: UserUpdateDto) {}

  async findOne(credentials: UserLoginDto) {}
}
