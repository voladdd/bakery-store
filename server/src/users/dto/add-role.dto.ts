import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({
    example: 'Admin',
    description: 'Название роли ',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly value: string;
  @ApiProperty({
    example: '1',
    description: 'ID пользователя ',
  })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly userId: number;
}
