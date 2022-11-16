import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from '../products/products.model';
import { Cart } from './carts.model';
import { AddProductDto } from './dto/add-product.dto';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class CartsService {
  constructor(
    @InjectModel(Cart) private cartRepository: typeof Cart,
    @InjectModel(Product) private productRepository: typeof Product,
  ) {}

  async CreateCart(dto: CreateCartDto) {
    const cart = await this.cartRepository.create(dto);
    return cart;
  }

  async getCartByUserId(userId: number) {
    const cart = await this.cartRepository.findOne({
      where: { userId },
      include: [Product],
    });
    return cart;
  }

  async getAllCarts() {
    const cart = await this.cartRepository.findAll();
    return cart;
  }

  async addProduct(userId: number, productId: number) {
    const cart = await this.getCartByUserId(userId);
    const product = await this.productRepository.findByPk(productId);
    if (cart && product) {
      await cart.$add('product', product.id);
      return product;
    }
    throw new HttpException(
      'Корзина или продукт не найдены',
      HttpStatus.NOT_FOUND,
    );
  }

  async removeProduct(userId: number, productId: number) {
    const cart = await this.getCartByUserId(userId);
    const product = await this.productRepository.findByPk(productId);
    if (cart && product) {
      await cart.$remove('product', product.id);
      return `${product.title} removed`;
    }
    throw new HttpException(
      'Корзина или продукт не найдены',
      HttpStatus.NOT_FOUND,
    );
  }
}
