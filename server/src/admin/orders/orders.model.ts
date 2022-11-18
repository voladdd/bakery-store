import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Cart } from '../carts/carts.model';
// import { ProductCategories } from '../products/product-categories.model';

interface OrderCreationAttrs {
  comment: string;
}

@Table({ tableName: 'orders' })
export class Order extends Model<Order, OrderCreationAttrs> {
  @ApiProperty({
    example: '1',
    description: 'order ID',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Not payed',
    description: 'Order status',
  })
  @Column({
    type: DataType.STRING,
    defaultValue: 'Not payed',
  })
  status: string;

  @ApiProperty({
    example: 'Please do your best and make me tasty bread!',
    description: 'User comment',
  })
  @Column({
    type: DataType.STRING,
    defaultValue: '',
  })
  comment: string;

  @ApiProperty({
    example: '1',
    description: 'cart ID',
  })
  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
    unique: true,
  })
  cartId: number;

  @BelongsTo(() => Cart)
  cart: Cart;
}
