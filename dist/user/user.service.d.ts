import { User } from './entities/user.entities';
import { Repository } from 'typeorm';
export declare class UserService {
    private usersData;
    constructor(usersData: Repository<User>);
    addUser(userInfo: any): Promise<User>;
}
