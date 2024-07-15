import { Controller, Get, Param, Redirect, Req, UseGuards } from '@nestjs/common';
import { AuthPassportService } from './auth-passport.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('auth2')
export class AuthPassportController {
  constructor(private readonly authPassportService: AuthPassportService) {}

  @Get('kakao')
  @UseGuards(AuthGuard('kakao'))
  kakaoLogin() {
    
  }

  @Get('kakao/callback')
  @UseGuards(AuthGuard('kakao'))
  kakaoLoginCallback(@Param('code') code: string, @Req() req: Request) {
    // req.user 타입 추론이 되지 않기 때문에 타입 작성 x
    const { user } = req;
    console.log(user);


    // 쿠키 만들어주고
    // 리다이텍트 걸어버리면 끝
    // 사용자 정보로 jwt토큰 만들고
    // res.cookie() 쿠키 헤더 메시지 추가
    // res.send()
  }
}
