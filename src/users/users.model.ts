import { Role } from '../roles/roles.model';
import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { UserRoles } from 'src/roles/user-roles.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({
    example: '1',
    description: 'Уникальный идентификатор пользователя',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'test@mail.ru',
    description: 'email адрес пользователя',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({
    example: 'randompassword123',
    description: 'пароль пользователя ',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  password: string;

  @ApiProperty({
    example: '88005553535',
    description: 'номер телефона пользователя',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  phone: string;

  @ApiProperty({
    example: 'Ivan',
    description: 'Имя пользователя',
  })
  @Column({
    type: DataType.STRING,
  })
  firstName: string;

  @ApiProperty({
    example: 'Ivanov',
    description: 'Фамилия пользователя',
  })
  @Column({
    type: DataType.STRING,
  })
  lastName: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
