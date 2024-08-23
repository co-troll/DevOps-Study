import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { compare, hash } from 'bcrypt';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('idCheck/:id')
  async idCheck(@Param('id') id: string, @Res() res: Response) {
    const data = await this.userService.findId(id);
    if (data) 
      return res.send(false);
    return res.send(true);
  }

  @Get('getUserAll')
  async getUserAll(@Res() res: Response) {
    const data = await this.userService.findAll();
    return res.send(data);
  }

  @Post('signup')
  async signup(@Body() user: UserDto) {
    user.password = await hash(user.password, 10);
    await this.userService.create(user);
  }

  @Post('login')
  async login(@Body() user: UserDto, @Res() res: Response) {
    const data = await this.userService.findId(user.loginId);
    const check = await compare(user.password, data.password);
    return res.send(check);
  }

  
}
