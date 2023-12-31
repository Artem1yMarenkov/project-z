import { UserCreateDto, UserLoginDto } from './dto';
import { UserService } from './user.service';
import { PreRegisterDto } from './dto/pre-register.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    login(credentials: UserLoginDto): Promise<void>;
    preRegister(data: PreRegisterDto): Promise<{
        code: string;
    }>;
    register(user: UserCreateDto): Promise<import("./user.entity").User>;
    update(): Promise<void>;
    delete(): Promise<void>;
}
