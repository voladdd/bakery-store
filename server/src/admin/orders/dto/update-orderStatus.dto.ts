import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdatOrderStatusDto {
  @ApiProperty({
    example: 'Completed',
    description: 'Статус заказа',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly status: string;
}
