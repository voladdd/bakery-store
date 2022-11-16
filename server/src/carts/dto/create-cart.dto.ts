import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateCartDto {
  @ApiProperty({
    example: '1',
    description: 'ID пользователя',
  })
  @IsNumber({}, { message: 'Должно быть строкой' })
  readonly userId: number;

  constructor(userId: number) {
    this.userId = userId;
  }
}
