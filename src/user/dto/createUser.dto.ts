import {
  IsAlphanumeric,
  IsEmail,
  IsStrongPassword,
  IsUUID,
} from 'class-validator';

export class CreateUserDto {
  @IsUUID()
  user_id: string;
  @IsEmail()
  email: string;
  @IsAlphanumeric()
  user_name: string;
  @IsStrongPassword()
  user_password: string;
}
