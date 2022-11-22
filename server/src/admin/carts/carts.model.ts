import { User } from './../users/users.model';
import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { Product } from '../products/products.model';
import { CartProducts } from './cart-products.model';
import { Order } from '../orders/orders.model';

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

  @BelongsTo(() => User)
  user: User;

  @HasOne(() => Order)
  order: Order;
}
