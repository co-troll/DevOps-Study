import { UnauthorizedException } from "@nestjs/common";
import { AuthStrategy } from "./auth.strategy";
import axios from "axios";
import { ConfigService } from "@nestjs/config";

export class GoogleStrategy implements AuthStrategy {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  constructor(private configService: ConfigService) {
    this.CLIENT_ID = this.configService.get<string>("GOOGLE_CLIENT_ID");
    this.CLIENT_SECRET = this.configService.get<string>("GOOGLE_CLIENT_SECRET");
    this.REDIRECT_URI = this.configService.get<string>("GOOGLE_CALLBACK_URL");
  }
  async validate(code: string): Promise<any> {
    try {
      const { data: { access_token } } = await axios.post("https://oauth2.googleapis.com/token", {}, {
        params: {
          client_id: this.CLIENT_ID,
          client_secret: this.CLIENT_SECRET,
          redirect_uri: this.REDIRECT_URI,
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
      throw new UnauthorizedException("구글 인증 실패")
    }
  }
}