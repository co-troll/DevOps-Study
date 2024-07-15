import { Controller, Get, Query, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private configService: ConfigService) {}

  @Get('kakaoLogin')
  kakaoLogin(@Res() res: Response) {
    // 카카오 인증 요청
    const REST_API_KEY = this.configService.get<string>("KAKAO_CLIENT_ID");
    const REDIRECT_URI = this.configService.get<string>("KAKAO_CALLBACK_URL");
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
    res.redirect(kakaoAuthUrl);

  }

  @Get('kakao/callback')
  async kakaoAuthLogin(@Query('code') code: string) {
    /* try {
      // 카카오 서버 엑세스 토큰 요청
      const { data: { access_token } } = await axios.post("https://kauth.kakao.com/oauth/token", {}, {
        // -d "grant_type=authorization_code \
        // -d "client_id=${REST_API_KEY}" \
        // --data-urlencode "redirect_uri=${REDIRECT_URI}" \
        // -d "code=${AUTHOREIZE_CODE};
        params: {
          grant_type: "authorization_code",
          client_id: "146481191f05ca0e309f3c338623cbe4",
          rdirect_uri: "http://localhost:3000/auth/kakao/callback",
          code
        }
      });
      console.log(access_token);
      const { data: UserData } = await axios.get("https://kapi.kakao.com/v2/user/me", {
        headers: {
          Authorization: `bearer ${access_token}`
        }
      })
      console.log(UserData)

    } catch(error) {

    }
    return code; */
    return await this.authService.validateKakao(code);
  }

  @Get('google')
  googleLogin(@Res() res: Response) {
    const MY_CLIENT_ID = this.configService.get<string>("GOOGLE_CLIENT_ID");
    const MY_REDIRECT_URI = this.configService.get<string>("GOOGLE_CALLBACK_URL");
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${MY_CLIENT_ID}&redirect_uri=${MY_REDIRECT_URI}&scope=email%20profile`;
    
    res.redirect(googleAuthUrl);
  }

  @Get('google/callback')
  async googleAuthLogin(@Query('code') code: string) {
    /* try {
      const { data: { access_token } } = await axios.post("https://oauth2.googleapis.com/token", {}, {
        params: {
          client_id: "",
          client_secret: "",
          redirect_uri: "",
          grant_type: "authorization_code",
          code
        }
      });
      console.log(access_token);

      const userData = await axios.get("https://www.googleapis.com/oauth2/v2/userinfo", {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      });
      console.log(userData);

    } catch (error) {
      
    } */
    return await this.authService.validateGoogle(code);
  }
}


        