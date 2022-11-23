import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UpdatOrderStatusDto } from 'src/admin/orders/dto/update-orderStatus.dto';
import { Order } from 'src/admin/orders/orders.model';
import { OrdersService } from 'src/admin/orders/orders.service';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('Seller/Orders')
@ApiBearerAuth('JWT-auth')
@Roles('Seller', 'Admin')
@UseGuards(RolesGuard)
@Controller('seller/orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @ApiOperation({ summary: 'Get all orders' })
  @ApiResponse({ status: 200, type: [Order] })
  @Get()
  getAll() {
    return this.orderService.getAllOrders();
  }

  @ApiOperation({ summary: 'Get order by ID' })
  @ApiResponse({ status: 200, type: Order })
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.orderService.getOrderById(id);
  }

  @ApiOperation({ summary: 'Update status' })
  @ApiResponse({ status: 200 })
  @Patch(':id')
  updateOrderStatus(
    @Param('id') orderId: number,
    @Body() dto: UpdatOrderStatusDto,
  ) {
    return this.orderService.updateOrderStatus(orderId, dto.status);
  }
}
