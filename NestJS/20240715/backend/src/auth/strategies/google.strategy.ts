import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthStrategy } from "./auth.strategy";
import axios from "axios";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class GoogleStrategy implements AuthStrategy {
  constructor(private configService: ConfigService) {}
  async validate(code: string): Promise<any> {
    try {
      const { data: { access_token } } = await axios.post("https://oauth2.googleapis.com/token", {}, {
        params: {
          client_id: this.configService.get<string>("GOOGLE_CLIENT_ID"),
          client_secret: this.configService.get<string>("GOOGLE_CLIENT_SECRET"),
          redirect_uri: this.configService.get<string>("GOOGLE_CALLBACK_URL"),
          grant_type: "authorization_code",
          code
        }
      });
      console.log(access_token);

      const { data: userData } = await axios.get("https://www.googleapis.com/oauth2/v2/userinfo", {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      });
      console.log(userData);
      return userData;
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException("구글 인증 실패")
    }
  }
}