import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AddCategoryDto {
  @ApiProperty({
    example: 'Выпечка',
    description: 'Название категории',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly title: string;
  // @ApiProperty({
  //   example: '1',
  //   description: 'ID продукта',
  // })
  // @IsNumber({}, { message: 'Должно быть числом' })
  // readonly productId: number;
}
