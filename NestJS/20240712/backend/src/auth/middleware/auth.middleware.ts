import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class AuthMiddleware implements NestMiddleware {
    // 핸들러함수
    use(req: Request, res: Response, next: NextFunction) {
        console.log(`${req.method} ${req.originalUrl}`);
        next();
    }
}