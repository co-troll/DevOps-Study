import { Module } from '@nestjs/common';
import { AuthPassportService } from './auth-passport.service';
import { AuthPassportController } from './auth-passport.controller';
import { KakaoStrategy } from './kakao.strategy';

@Module({
  controllers: [AuthPassportController],
  providers: [AuthPassportService, KakaoStrategy],
})
export class AuthPassportModule {}
