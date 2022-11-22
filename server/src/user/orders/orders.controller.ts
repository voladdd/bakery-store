import { Order } from './../../admin/orders/orders.model';
import { Controller, Get, UseGuards, Request, Param } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { OrdersService } from 'src/admin/orders/orders.service';

@ApiTags('User/Orders')
@ApiBearerAuth('JWT-auth')
@Roles('User')
@UseGuards(RolesGuard)
@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @ApiOperation({ summary: 'Get user orders' })
  @ApiResponse({ status: 200, type: Order })
  @Get()
  getAllUserOrders(@Request() req) {
    return this.ordersService.getAllUserOrders(req.user.id);
  }

  @ApiOperation({ summary: 'Get user order' })
  @ApiResponse({ status: 200, type: Order })
  @Get(':id')
  getUserOrder(@Param('id') id: number) {
    return this.ordersService.getOrderById(id);
  }
}
