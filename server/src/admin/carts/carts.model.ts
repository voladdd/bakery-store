import { User } from './../users/users.model';
import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Product } from '../products/products.model';
import { CartProducts } from './cart-products.model';

interface CartCreationAttrs {
  userId: number;
}

@Table({ tableName: 'carts' })
export class Cart extends Model<Cart, CartCreationAttrs> {
  @ApiProperty({
    example: '1',
    description: 'Уникальный идентификатор корзины',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: '1',
    description: 'ID пользователя',
  })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @BelongsToMany(() => Product, () => CartProducts)
  products: Product[];
}
