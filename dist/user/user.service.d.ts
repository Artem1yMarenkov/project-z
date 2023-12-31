import { UserCreateDto, UserLoginDto, UserUpdateDto } from './dto';
import { User } from './user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private _userRepository;
    constructor(_userRepository: Repository<User>);
    create(user: UserCreateDto): Promise<User>;
    delete(user: UserUpdateDto): Promise<void>;
    update(user: UserUpdateDto): Promise<void>;
    findOne(credentials: UserLoginDto): Promise<void>;
}
