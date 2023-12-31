import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class PreRegisterDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  login: string;
}
