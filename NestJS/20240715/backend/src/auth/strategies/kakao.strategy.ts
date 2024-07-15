import axios from "axios";
import { AuthStrategy } from "./auth.strategy";
import { UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

export class KakaoStrategy implements AuthStrategy {
  constructor(private configService: ConfigService) {}
  async validate(code: string): Promise<any> {
    try {
      // 카카오 서버 엑세스 토큰 요청
      const { data: { access_token } } = await axios.post("https://kauth.kakao.com/oauth/token", {}, {
        // -d "grant_type=authorization_code \
        // -d "client_id=${REST_API_KEY}" \
        // --data-urlencode "redirect_uri=${REDIRECT_URI}" \
        // -d "code=${AUTHOREIZE_CODE};
        params: {
          grant_type: "authorization_code",
          client_id: this.configService.get<string>("KAKAO_CLIENT_ID"),
          rdirect_uri: this.configService.get<string>("KAKAO_CALLBACK_URL"),
          code
        }
      });
      console.log(access_token);
      const { data: userData } = await axios.get("https://kapi.kakao.com/v2/user/me", {
        headers: {
          Authorization: `bearer ${access_token}`
        }
      })
      console.log(userData)
      return userData;
    } catch(error) {
      throw new UnauthorizedException("카카오 인증 실패")
    }
  }
}