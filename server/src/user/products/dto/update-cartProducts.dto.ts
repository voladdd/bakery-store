import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class UpdateCartProdcutsDto {
  @ApiProperty({
    example: '5',
    description: 'Кол-во продукта',
  })
  @IsNumber({}, { message: 'Должно быть строкой' })
  readonly quantity: number;
}
