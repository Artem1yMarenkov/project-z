import { Injectable } from '@nestjs/common';
import {
  UserCreateDto,
  UserLoginDto,
  UserUpdateDto,
} from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    // @InjectRepository(User)
    // private userRepository: Repository<User>,
  ) {}

  async create(user: UserCreateDto) {}

  async delete(user: UserUpdateDto) {}

  async update(user: UserUpdateDto) {}

  async findOne(credentials: UserLoginDto) {}
}
