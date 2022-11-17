import { CreateOrderDto } from './../../admin/orders/dto/create-order.dto';
import { OrdersService } from './../../admin/orders/orders.service';
import { Cart } from './../../admin/carts/carts.model';
import { UsersService } from './../../admin/users/users.service';
import {
  Controller,
  Get,
  UseGuards,
  Request,
  Post,
  Body,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { Order } from 'src/admin/orders/orders.model';

@ApiTags('User/Cart')
@ApiBearerAuth('JWT-auth')
@Roles('User')
@UseGuards(RolesGuard)
@Controller('cart')
export class CartController {
  constructor(
    private usersService: UsersService,
    private ordersService: OrdersService,
  ) {}

  @ApiOperation({ summary: 'Get user cart' })
  @ApiResponse({ status: 200, type: Cart })
  @Get()
  getCart(@Request() req) {
    return this.usersService.getCart(req.user);
  }

  @ApiOperation({ summary: 'Create order' })
  @ApiResponse({ status: 200, type: Order })
  @Post('order')
  createOrder(@Request() req, @Body() dto: CreateOrderDto) {
    return this.ordersService.createOrder(req.user, dto);
  }
}
