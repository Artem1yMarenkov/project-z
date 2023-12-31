import { UserCreateDto, UserLoginDto, UserUpdateDto } from './dto';
export declare class UserService {
    constructor();
    create(user: UserCreateDto): Promise<void>;
    delete(user: UserUpdateDto): Promise<void>;
    update(user: UserUpdateDto): Promise<void>;
    findOne(credentials: UserLoginDto): Promise<void>;
}
