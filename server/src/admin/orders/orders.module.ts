import { UsersModule } from 'src/admin/users/users.module';
import { User } from 'src/admin/users/users.model';
import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from '../carts/carts.model';
import { Order } from './orders.model';
import { OrdersService } from './orders.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Order, Cart, User]),
    forwardRef(() => UsersModule),
  ],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
