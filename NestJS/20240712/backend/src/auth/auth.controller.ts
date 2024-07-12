import { Body, Controller, Get, Post, Res, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TokenGuard } from './guards/token.guard';
import { Response } from 'express';
import { AuthInterceptor } from './interceptor/auth.interceptor';

@Controller('auth')
@UseInterceptors(AuthInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Get('user')
  @UseGuards(TokenGuard)
  findUser() {
    return;
  }

  @Get('login')
  login() {
    return "로그인완료";
  }


  @Post('userToken')
  token(@Body('id') id: string, @Body('age') age: number, @Res() res: Response) {
    const token = this.authService.signToken(id, age);
    const cookieDate = new Date(Date.now() + (60 * 5 * 1000));
    res.cookie("accessToken", token, { httpOnly: true, expires: cookieDate });
    return res.send({ message: "로그인 성공" });
  }
}
