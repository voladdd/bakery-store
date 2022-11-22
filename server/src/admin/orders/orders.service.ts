import { Product } from './../products/products.model';
import { Cart } from './../carts/carts.model';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './orders.model';
import { UsersService } from 'src/admin/users/users.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order) private orderRepository: typeof Order,
    @InjectModel(Cart) private cartRepository: typeof Cart,
    private usersService: UsersService,
  ) {}
  async createOrder(user: any, dto: CreateOrderDto) {
    const cart = await this.usersService.getCartByUserId(user.id);
    const order = await this.orderRepository.create(dto);
    await cart.$set('order', order.id);
    cart.order = order;
    return order;
  }

  async getAllOrders() {
    const orders = await this.orderRepository.findAll({ include: Cart });
    return orders;
  }

  async getAllUserOrders(userId: number) {
    const carts = await this.cartRepository.findAll({
      where: { userId },
      include: Order,
    });
    return carts;
  }

  async getOrderById(id: number) {
    const order = await this.orderRepository.findOne({
      where: { id },
      include: [{ model: Cart, include: [Product] }],
    });
    return order;
  }

  async getOneUserOrder(userId: number, orderId: number) {
    // where cart.userId = UserId && cart.orderId = orderId
    // const carts = await this.cartRepository.findOne({
    //   where: { userId },
    //   include: Order,
    // });
    const order = await this.orderRepository.findByPk(orderId, {
      include: [{ model: Cart, include: [Product] }],
    });
    if (!order) {
      throw new HttpException(`Order was not founded`, HttpStatus.NOT_FOUND);
    }
    const cart = await this.cartRepository.findByPk(order.cartId);
    if (userId === cart.userId) {
      return order;
    }
    throw new HttpException(`Unexpected userId`, HttpStatus.FORBIDDEN);
  }

  async deleteOrderById(id: string) {
    const deletedRows = await this.orderRepository.destroy({
      where: { id },
    });
    return `${deletedRows} rows was deleted`;
  }

  async updateOrderStatus(orderId: number, status: string) {
    const order = await this.orderRepository.findByPk(orderId);
    if (order) {
      await order.update({ status });
      return order;
    }
    throw new HttpException(`Order was not founded`, HttpStatus.NOT_FOUND);
  }
}
