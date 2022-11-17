import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Product } from '../products/products.model';
import { Cart } from './carts.model';

@Table({ tableName: 'cart_products', createdAt: false, updatedAt: false })
export class CartProducts extends Model<CartProducts> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
  })
  cartId: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
  })
  productId: number;

  @Column({
    type: DataType.INTEGER,
    unique: false,
    defaultValue: 1,
    validate: {
      min: 0,
    },
  })
  quantity: number;
}
