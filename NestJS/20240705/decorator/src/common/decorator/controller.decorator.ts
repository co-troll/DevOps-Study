import "reflect-metadata";

export function Controller(basePath: string): ClassDecorator {
    return (target: Function) => {
        // basePath 이름으로 메타데이터 정의
        // basePath 값을 전달하고
        // target 함수
        Reflect.defineMetadata("basePath", basePath, target);
    }
}

export function Get(path: string = "/"): MethodDecorator {
    return (target, prop, script: any) => {
        // script.value : 메서드의 자체
        // script.writable : 메서드 변경 가능 여부
        // path
        Reflect.defineMetadata("path", path, script.value);
        Reflect.defineMetadata("method", "get", script.value);
    }
}