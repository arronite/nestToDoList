import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private usersData: Repository<User>) {}

  addUser(userInfo): Promise<User> {
    return this.usersData.save(userInfo);
  }
}
