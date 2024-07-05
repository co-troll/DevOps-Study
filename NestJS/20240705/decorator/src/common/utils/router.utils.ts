import { Router, Request, Response } from "express";

export function createRouter(controller: any, providers: any[]): Router {
    // 라우터 객체
    const router: any = Router();
    // 컨트롤러 basePath 메타데이터를 가져오고
    const basePath: string = Reflect.getMetadata("basePath", controller);

    // 컨트롤러에 주입할 목록들 인스턴스 생성
    // providers 배열을 map을 호출하고
    // provider 클래스 들을 인스턴스 생성해서
    // map 반환 데이터 배영을스프레드 연산자로 값을 깊은 복사
    // controller 인스턴스 생성할때 매개변수로 전달
    const instance = new controller(...providers.map(provider => new provider()));

    // 컨트롤러 클래스로 생성한 인스턴스의 모든 메서드 가져오고
    // getOwnPropertyNames : 모든 메서드의 이름을 순회하면서 가져온다.
    Object.getOwnPropertyNames(controller.prototype).forEach((key) => {
        // 현재 메서드의 핸들러를 가져온다.
        const routerHandler = controller.prototype[key];

        // 메서드 핸들러의 path로 메타데이터 가져오기
        const path = Reflect.getMetadata("path", routerHandler);

        // 메서드 핸들러의 http 메서드 가져오기
        const method = Reflect.getMetadata("method", routerHandler);

        if (path && method) {
            router[method](`${basePath}${path}`, (req: Request, res: Response) => {
                routerHandler.call(instance, req, res);
            })
        }
    })
    return router;
}