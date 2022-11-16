import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common';

export class ValidationException extends HttpException {
  messages: string | Record<string, any>;

  constructor(response: string | Record<string, any>) {
    super(response, HttpStatus.BAD_REQUEST);
    this.messages = response;
  }
}
