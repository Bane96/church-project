import {Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import {AuthService} from "./auth/auth.service";
import {LocalAuthGuard} from "./auth/local.auth.guard";

@Controller()
export class AppController {
  constructor() {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

}
