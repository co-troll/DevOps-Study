import { Request, Response } from "express";
import { Controller, Get } from "../common/decorator/controller.decorator";
import { AppService } from "./app.service";

@Controller("/user")
export class AppController {
    constructor(private readonly appService: AppService) {}
    
    @Get()
    getText(req: Request, res: Response) {
        res.send(this.appService.getText());
    }
}