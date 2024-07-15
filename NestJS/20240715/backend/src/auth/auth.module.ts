import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { KakaoStrategy } from './strategies/kakao.strategy';
import { GoogleStrategy } from './strategies/google.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({
    secret: "soon",
    signOptions: { expiresIn: "30m" }
  })],
  controllers: [AuthController],
  providers: [
    AuthService, 
    { provide: "KAKAO_STRATEGY", useClass: KakaoStrategy }, 
    { provide: "GOOGLE_STRATEGY", useClass: GoogleStrategy }
  ],
})
export class AuthModule {}
