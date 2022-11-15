import { Product } from 'src/products/products.model';
import { Cart } from './carts.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CartsService } from './carts.service';
import { User } from 'src/users/users.model';
import { CartProducts } from './cart-products.model';
import { CartsController } from './carts.controller';

@Module({
  imports: [SequelizeModule.forFeature([User, Cart, CartProducts, Product])],
  providers: [CartsService],
  exports: [CartsService],
  controllers: [CartsController],
})
export class CartsModule {}
