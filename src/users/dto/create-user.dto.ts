import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'test@mail.ru',
    description: 'email адрес пользователя',
  })
  readonly email: string;

  @ApiProperty({
    example: 'randompassword123',
    description: 'пароль пользователя ',
  })
  readonly password: string;
}
