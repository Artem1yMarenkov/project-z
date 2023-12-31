import { Body, Controller, Delete, Post, Put } from '@nestjs/common';
import { UserCreateDto, UserLoginDto } from './dto';
import { UserService } from './user.service';
import { PreRegisterDto } from './dto/pre-register.dto';

// TODO: сделать нормальный preRegister модуль
const EMAIL_CODE = 'te34wt5';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
    // private readonly mailService: MailService,
  }

  @Post('login')
  async login(@Body('credentials') credentials: UserLoginDto) {
    this.userService.findOne(credentials);
  }

  @Post('pre-register')
  async preRegister(@Body() data: PreRegisterDto) {
    return {
      code: EMAIL_CODE,
    };
  }

  @Post('register')
  async register(@Body('user') user: UserCreateDto) {
    return this.userService.create(user);
  }

  @Put('update')
  async update() {}

  @Delete('delete')
  async delete() {}
}
