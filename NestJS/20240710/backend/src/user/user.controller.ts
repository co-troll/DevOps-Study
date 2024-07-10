import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { IsString, UserLoginObjectPipe, UserNameMaxCount, UserNameMinCount, UserNamePipe } from 'src/pipe/user.pipe';
import { userDTO } from '../dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':index')
  findNumberIndex(@Param('index', UserNameMinCount, UserNameMaxCount) index: number) {
    console.log(index);
    return index;
  }

  @Get('name/:username')
  checkUsername(@Param('username', IsString, UserNameMinCount, UserNameMaxCount) username: string) {
    console.log(username);
    return username;
  }

  @Post('loginUser')
  login(@Body(new UserLoginObjectPipe(userDTO)) body: any) {
    return body;
  }
}
