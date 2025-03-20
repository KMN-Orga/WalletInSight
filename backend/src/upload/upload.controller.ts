/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';

@Controller()
export class UploadController {
  @Get('uplaod')
  getAllUpload(): string {
    return JSON.stringify([]);
  }
}
