import { OrdersService } from './orders.service';
import { Order } from './orders.model';
import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
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
import { UpdatOrderStatusDto } from './dto/update-orderStatus.dto';

@ApiTags('Admin/Orders')
@ApiBearerAuth('JWT-auth')
@Roles('Admin')
@UseGuards(RolesGuard)
@Controller('admin/orders')
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

  @ApiOperation({ summary: 'Delete order' })
  @ApiResponse({ status: 200, type: Number })
  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.orderService.deleteOrderById(id);
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
