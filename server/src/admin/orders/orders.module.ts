import { UsersModule } from 'src/admin/users/users.module';
import { User } from 'src/admin/users/users.model';
import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from '../carts/carts.model';
import { Order } from './orders.model';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrdersController as UserOrdersController } from 'src/user/orders/orders.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Order, Cart, User]),
    forwardRef(() => UsersModule),
    AuthModule,
  ],
  providers: [OrdersService],
  exports: [OrdersService],
  controllers: [OrdersController, UserOrdersController],
})
export class OrdersModule {}
