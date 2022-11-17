import { OrdersModule } from './../orders/orders.module';
import { Product } from '../products/products.model';
import { Cart } from './carts.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CartsService } from './carts.service';
import { User } from '../users/users.model';
import { CartProducts } from './cart-products.model';
import { Order } from '../orders/orders.model';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Cart, CartProducts, Product, Order]),
  ],
  providers: [CartsService],
  exports: [CartsService],
})
export class CartsModule {}
