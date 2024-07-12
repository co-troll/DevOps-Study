import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly jwt: JwtService) {}
    
    signToken(id: string, age: number) {
        const payload = {
            id, age
        }

        return this.jwt.sign(payload, { expiresIn: 60 * 5 * 1000 });
    }

    verifyToken(jwt: string) {
        return this.jwt.verify(jwt);
    }
}
