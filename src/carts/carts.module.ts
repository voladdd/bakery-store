import { Cart } from './carts.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CartsService } from './carts.service';
import { User } from 'src/users/users.model';

@Module({
  imports: [SequelizeModule.forFeature([User, Cart])],
  providers: [CartsService],
  exports: [CartsService],
})
export class CartsModule {}
