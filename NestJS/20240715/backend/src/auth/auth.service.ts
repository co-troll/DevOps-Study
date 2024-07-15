import { Inject, Injectable } from '@nestjs/common';
import { AuthStrategy } from './strategies/auth.strategy';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @Inject('KAKAO_STRATEGY') private readonly kakaoStrategy: AuthStrategy,
        @Inject('GOOGLE_STRATEGY') private readonly googleStrategy: AuthStrategy,
        private readonly jwtService: JwtService
    ) {}

    generateJWT(user: any) {
        console.log(user);
        const payload = {};
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    async validateKakao(code: string): Promise<any> {
        const user = await this.kakaoStrategy.validate(code);
        return this.generateJWT(user);
    }

    async validateGoogle(code: string): Promise<any> {
        const user = await this.googleStrategy.validate(code);
        return this.generateJWT(user);
    }
}
