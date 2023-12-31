import { IsNotEmpty } from 'class-validator';

export class UserLoginDto {
  @IsNotEmpty()
  readonly login: string;

  @IsNotEmpty()
  readonly email: string;
}
