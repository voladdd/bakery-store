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
  async createOrder(userId: number, dto: CreateOrderDto) {
    // const cart = await this.usersService.getCartByUserId(userId.toString());
    const cart = await this.cartRepository.findOne({
      where: { userId },
      order: [['createdAt', 'DESC']],
    });
    const order = await this.orderRepository.create(dto);
    if (!(cart || order)) {
      throw new HttpException(
        `Cart or Order was not founded`,
        HttpStatus.NOT_FOUND,
      );
    }
    await cart.$set('order', order.id);
    cart.order = order;
    await this.usersService.addCart({ userId });
    return order;
  }

  async getAllOrders() {
    const orders = await this.orderRepository.findAll({ include: Cart });
    return orders;
  }

  async getAllUserOrders(userId: number) {
    const cart = await this.cartRepository.findAll({
      where: { userId },
      include: Order,
    });
    const orders = cart
      .map((value) => value.order)
      .filter((value) => value !== null);
    return orders;
  }

  async getOrderById(id: number) {
    const order = await this.orderRepository.findOne({
      where: { id },
      include: [{ model: Cart, include: [Product] }],
    });
    return order;
  }

  async getOneUserOrder(userId: number, orderId: number) {
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
