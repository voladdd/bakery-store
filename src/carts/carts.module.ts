import { Cart } from './carts.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CartsService } from './carts.service';
import { User } from 'src/users/users.model';
import { CartProducts } from './cart-products.model';

@Module({
  imports: [SequelizeModule.forFeature([User, Cart, CartProducts])],
  providers: [CartsService],
  exports: [CartsService],
})
export class CartsModule {}
