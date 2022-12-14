import { Cart } from '../carts/carts.model';
import { ProductCategories } from './product-categories.model';
import { Category } from '../categories/categories.model';
import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { CartProducts } from '../carts/cart-products.model';

interface ProductCreationAttrs {
  title: string;
  description: string;
  image: string | Promise<string>;
}

@Table({ tableName: 'products' })
export class Product extends Model<Product, ProductCreationAttrs> {
  @ApiProperty({
    example: '1',
    description: 'Уникальный идентификатор продукта',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Булочка с маком',
    description: 'Название продукта',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: 'Нереальный продукт высшего качества',
    description: 'Описание продукта',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.STRING,
  })
  image: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: 0,
    },
  })
  price: number;

  @BelongsToMany(() => Category, () => ProductCategories)
  categories: Category[];

  @BelongsToMany(() => Cart, () => CartProducts)
  carts: Cart[];
}
