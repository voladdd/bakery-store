import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Булочка с маком',
    description: 'Название продукта',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly title: string;
  @ApiProperty({
    example: 'Нереальный продукт высшего качества',
    description: 'Описание продукта',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly description: string;
}
