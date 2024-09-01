import { Controller, Post, Body } from '@nestjs/common';
import { User } from './entities/user.entities';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  addUser(@Body() userInfo: CreateUserDto): Promise<User> {
    return this.userService.addUser(userInfo);
  }
}
