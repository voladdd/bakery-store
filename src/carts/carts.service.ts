import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './carts.model';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class CartsService {
  constructor(@InjectModel(Cart) private cartRepository: typeof Cart) {}

  async CreateCart(dto: CreateCartDto) {
    const cart = await this.cartRepository.create(dto);
    return cart;
  }

  async getCartByUserId(userId: string) {
    const cart = await this.cartRepository.findOne({ where: { userId } });
    return cart;
  }

  async getAllCarts() {
    const cart = await this.cartRepository.findAll();
    return cart;
  }
}
