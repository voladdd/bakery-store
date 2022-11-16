import { ValidationPipe } from 'src/pipes/validation.pipe';
import { AddRoleDto } from './dto/add-role.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { User } from './users.model';
import { UsersService } from './users.service';
import {
  Request,
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { CreateCartDto } from '../carts/dto/create-cart.dto';
import { DeleteUserDto } from './dto/delete-user.dto';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, type: User })
  // @ApiBearerAuth('JWT-auth')
  // @Roles('Admin')
  // @UseGuards(RolesGuard)
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Удаление пользователя' })
  @ApiResponse({ status: 200, type: Number })
  @Delete()
  delete(@Body() userDto: DeleteUserDto) {
    return this.usersService.deleteUserById(userDto.id);
  }

  @ApiOperation({ summary: 'Получение всех пользователей' })
  @ApiResponse({ status: 200, type: [User] })
  @ApiBearerAuth('JWT-auth')
  // @Roles('Admin')
  // @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'Выдать роль' })
  @ApiResponse({ status: 200 })
  @ApiBearerAuth('JWT-auth')
  // @Roles('Admin')
  // @UseGuards(RolesGuard)
  @Post('/role')
  addRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto);
  }

  @ApiOperation({ summary: 'Создать и закрепить за пользователем корзину' })
  @ApiResponse({ status: 200 })
  @ApiBearerAuth('JWT-auth')
  @Roles('Admin')
  @UseGuards(RolesGuard)
  @UsePipes(ValidationPipe)
  @Post('/cart')
  addCart(@Body() dto: CreateCartDto) {
    return this.usersService.addCart(dto);
  }

  @ApiOperation({ summary: 'Получить корзину пользователя' })
  @ApiResponse({ status: 200 })
  @ApiBearerAuth('JWT-auth')
  @Roles('User')
  @UseGuards(RolesGuard)
  @Get('/cart')
  getCart(@Request() req) {
    return this.usersService.getCart(req.user);
  }
}
