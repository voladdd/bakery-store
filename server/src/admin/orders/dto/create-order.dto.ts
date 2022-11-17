import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    example: 'Please do your best and make me tasty bread!',
    description: 'User comment',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly comment: string;
}
