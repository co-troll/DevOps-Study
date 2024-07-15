import { AuthStrategy } from "./auth.strategy";

export class EmailStrategy implements AuthStrategy {
  async validate(code: string): Promise<any> {
    // 로직 추가
    // 토큰 검증 로직
  }
}