import { OrdersModule } from './../../admin/orders/orders.module';
import { UsersModule } from './../../admin/users/users.module';
import { AuthModule } from './../../auth/auth.module';
import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';

@Module({
  controllers: [CartController],
  imports: [AuthModule, UsersModule, OrdersModule],
})
export class CartModule {}
