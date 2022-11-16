import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    example: 'Выпечка',
    description: 'Название категории',
  })
  @IsString({ message: 'Поле должно быть строкой' })
  readonly title: string;
  @ApiProperty({
    example: 'Мастерски приготовленная выпечка',
    description: 'Описание категории',
  })
  @IsString({ message: 'Поле должно быть строкой' })
  readonly description: string;
}
