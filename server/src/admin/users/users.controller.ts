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
  Param,
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

@ApiTags('Admin')
@ApiBearerAuth('JWT-auth')
@Roles('Admin')
@UseGuards(RolesGuard)
@Controller('admin/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 200, type: User })
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'Get user' })
  @ApiResponse({ status: 200, type: User })
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @ApiOperation({ summary: 'Delete user' })
  @ApiResponse({ status: 200, type: Number })
  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.usersService.deleteUserById(id);
  }

  @ApiOperation({ summary: 'Set role to user' })
  @ApiResponse({ status: 200 })
  @Post(':id/roles')
  addRole(@Param('id') id: string, @Body() dto: AddRoleDto) {
    return this.usersService.addRole(id, dto);
  }

  @ApiOperation({ summary: 'Get user roles' })
  @ApiResponse({ status: 200 })
  @Get(':id/roles')
  getRole(@Param('id') id: string) {
    return this.usersService.getUserRoles(id);
  }

  // @ApiOperation({ summary: 'Get user cart' })
  // @ApiResponse({ status: 200 })
  // @Get('/cart')
  // getCart(@Request() req) {
  //   return this.usersService.getCart(req.user);
  // }

  // @ApiOperation({ summary: 'Create and set cart to user' })
  // @ApiResponse({ status: 200 })
  // @Post('/cart')
  // addCart(@Body() dto: CreateCartDto) {
  //   return this.usersService.addCart(dto);
  // }

  @ApiOperation({ summary: 'Get user cart' })
  @ApiResponse({ status: 200 })
  @Get(':id/cart')
  getCart(@Param('id') id: string) {
    return this.usersService.getCartByUserId(id);
  }
}
