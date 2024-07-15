import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-kakao";

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy, "kakao") {
    constructor(private configService: ConfigService) {
        super({
            clientID: configService.get<string>("KAKAO_CLIENT_ID"), // client ID 값을
            callbackURL: configService.get<string>("KAKAO_CALLBACK_URL") // callback url 값을
        });
    }

    validate(access_token: string, refresh_token: string, user: Profile, done: any) {
        const { id, username, _json } = user;

        const userResult = {
            id,
            username,
            profileImage: _json.properties.profile_image,
            email: _json.kakao_account.email
        };

        done(null, userResult);
        // req에 user라는 키값을 추가해준다.
    }
}