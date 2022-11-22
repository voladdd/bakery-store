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
    await user.$add('carts', cart.id);
    user.roles = [role];
    user.carts = [cart];
    return user;
  }

  async getUserById(id: string) {
    const user = await this.userRepository.findOne({
      where: { id },
      include: [Role, Cart],
    });
    if (user) {
      return user;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async getCartByUserId(id: string) {
    const user = await this.userRepository.findOne({
      where: { id },
      include: Cart,
    });
    if (user) {
      return user.carts;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async getUserRoles(id: string) {
    const user = await this.userRepository.findOne({
      where: { id },
      include: Role,
    });
    if (user) {
      return user.roles;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async deleteUserById(userId: string) {
    const deletedRows = await this.userRepository.destroy({
      where: { id: userId },
    });
    return `${deletedRows} rows was deleted`;
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
      include: [Role, Cart],
    });
    return user;
  }

  async addRole(id: string, dto: AddRoleDto) {
    const user = await this.userRepository.findByPk(id);
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
      await user.$add('cart', cart.id);
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
