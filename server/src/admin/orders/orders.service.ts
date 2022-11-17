import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './orders.model';
import { UsersService } from 'src/admin/users/users.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order) private orderRepository: typeof Order,
    private usersService: UsersService,
  ) {}
  async createOrder(user: any, dto: CreateOrderDto) {
    const cart = await this.usersService.getCartByUserId(user.id);
    const order = await this.orderRepository.create(dto);
    await cart.$set('order', order.id);
    cart.order = order;
    return order;
  }
}
