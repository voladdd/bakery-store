import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class AddProductDto {
  @ApiProperty({
    example: '1',
    description: 'ID пользователя',
  })
  @IsNumber({}, { message: 'Должно быть строкой' })
  readonly userId: number;
  @ApiProperty({
    example: '1',
    description: 'ID продукта',
  })
  @IsNumber({}, { message: 'Должно быть строкой' })
  readonly productId: number;
}
