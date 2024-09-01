import { User } from './entities/user.entities';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    addUser(userInfo: CreateUserDto): Promise<User>;
}
