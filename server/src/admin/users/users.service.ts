import { CreateCartDto } from './../carts/dto/create-cart.dto';
import { CartsService } from './../carts/carts.service';
import { HttpStatus } from '@nestjs/common/enums';
import { AddRoleDto } from './dto/add-role.dto';
import { Role } from '../roles/roles.model';
import { RolesService } from './../roles/roles.service';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { Cart } from '../carts/carts.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Cart) private cartRepository: typeof Cart,
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService,
    private cartService: CartsService,
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue('User');
    const cart = await this.cartService.CreateCart(new CreateCartDto(user.id));
    await user.$set('roles', [role.id]);
    await user.$set('cart', cart.id);
    user.roles = [role];
    user.cart = cart;
    return user;
  }

  async deleteUserById(userId: number) {
    const deletedRows = await this.userRepository.destroy({
      where: { id: userId },
    });
    return deletedRows;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({
      include: [Role, Cart],
    });
    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: Role,
    });
    return user;
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    const role = await this.roleService.getRoleByValue(dto.value);
    if (role && user) {
      await user.$add('role', role.id);
      return dto;
    }
    throw new HttpException(
      'Пользователь или роль не найдены',
      HttpStatus.NOT_FOUND,
    );
  }

  async addCart(dto: CreateCartDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    const cart = await this.cartService.CreateCart(new CreateCartDto(user.id));
    if (user && cart) {
      await user.$set('cart', cart.id);
      return dto;
    }
    throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
  }

  async getCart(user: User) {
    const cart = await this.cartService.getCartByUserId(user.id);
    if (cart) {
      return cart;
    }
    throw new HttpException('Корзина не найдена', HttpStatus.NOT_FOUND);
  }
}