import "reflect-metadata";

const decorator = (target: any, property: string) => {
    console.log(property);
    Reflect.defineMetadata("metadataKey", "metadataValue", target, property);
    console.log(target);
}

class App {
    @decorator
    start() {
        console.log("app");
    }
}

const temp = new App();
const metadata = Reflect.getMetadata("metadataKey", temp, "start");
console.log(metadata);
temp.start();

// 런타입에서 데코레이터 함수와 같이 작성한 함수가 같이 호출된다.