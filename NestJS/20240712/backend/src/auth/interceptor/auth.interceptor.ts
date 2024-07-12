import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Request } from "express";
import { map, Observable, tap } from "rxjs";

export class AuthInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        // 요청이 들어오면 접근의 인터페이스를 제공
        // next 핸들러 함수를 매개변수로 전달하는 메서드를 제공 요청 핸들러를 래핑하는 인터페이스 매개변수 순서로 호출이 된다.
        // 요청이 들어오면 어떤 요청인지 그리고 시간은 얼마나 되는지
        const date = new Date();

        const req = context.switchToHttp().getRequest() as Request;
        //  console.log(req);

        const log = `${req.originalUrl} ${date.toLocaleString()}`
        // next.handle() : 다음 핸들러로 요처을 보내느 함수
        // pipe 응답이 반환 될때 값을 tap에 전달한다.
        // tap은 Observable의 작성을 할 수 있게 한다.
        return next.handle().pipe(
            tap(() => {
                const date2 = new Date();
                const time = date2.getTime() - date.getTime() + "ms";
                console.log(log, time);
            }),
            map((data) => ({ mykey: "soon", data }))
        );
    }
}