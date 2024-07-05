import express from "express";
import { AppModule } from "./app/app.module";
import { createRouter } from "./common/utils/router.utils";
// npm i -D(--save-dev) @types/express

function bootstrap() {
    const app = express();

    const moduleMetaData = Reflect.getMetadata("module", AppModule);

    moduleMetaData.controllers.forEach((controller: any) => {
        const router = createRouter(controller, moduleMetaData.providers);
        app.use("/", router);
    })

    app.listen(3000, () => {
        console.log("server on~");
    })
}

bootstrap();

