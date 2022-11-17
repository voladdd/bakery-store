import { CartProducts } from './cart-products.model';
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
    @InjectModel(CartProducts)
    private cartProductsRepository: typeof CartProducts,
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

  async updateCartProductQuantity(row: CartProducts, quantity: number);
  async updateCartProductQuantity(
    userId: number,
    productId: number,
    quantity: number,
  );
  async updateCartProductQuantity(
    rowOrUserId: CartProducts | number,
    productId?: number,
    quantity?: number,
  ) {
    if (typeof rowOrUserId !== 'number') {
      if (rowOrUserId) {
        //row
        await rowOrUserId.update({ quantity });
        return;
      }
      throw new HttpException(
        `Product ${rowOrUserId.productId} was not found at cart ${rowOrUserId.cartId}`,
        HttpStatus.NOT_FOUND,
      );
    } else {
      //UserId
      const cart = await this.getCartByUserId(rowOrUserId);
      const row = await this.cartProductsRepository.findOne({
        where: { cartId: cart.id, productId },
      });
      console.log(quantity);
      if (row) {
        await row.update({ quantity });
        return row;
      }
      throw new HttpException(
        `Product ${row.productId} was not found at cart ${row.cartId}`,
        HttpStatus.NOT_FOUND,
      );
    }
    return;
  }

  // async updateCartProductQuantity(
  // cartId: number,
  // productId: number,
  //   row: CartProducts,
  //   quantity: number,
  // ) {
  //   if (row) {
  //     await row.update({ quantity });
  //     return;
  //   }
  //   throw new HttpException(
  //     `Product ${row.productId} was not found at cart ${row.cartId}`,
  //     HttpStatus.NOT_FOUND,
  //   );
  // }

  // async updateCartProductQuantity(
  //   cartId: number,
  //   productId: number,
  //   // row: CartProducts,
  //   quantity: number,
  // ) {
  //   const row = await this.cartProductsRepository.findOne({
  //     where: { cartId, productId },
  //   });
  //   if (row) {
  //     await row.update({ quantity });
  //     return 1;
  //   }
  //   throw new HttpException(
  //     `Product ${row.productId} was not found at cart ${row.cartId}`,
  //     HttpStatus.NOT_FOUND,
  //   );
  // }

  async addProduct(userId: number, productId: number) {
    const cart = await this.getCartByUserId(userId);
    const product = await this.productRepository.findByPk(productId);
    const row = await this.cartProductsRepository.findOne({
      where: { cartId: cart.id, productId },
    });
    if (row) {
      await this.updateCartProductQuantity(row, row.quantity + 1);
      return row;
    } else if (cart && product) {
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
