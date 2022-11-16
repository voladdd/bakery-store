import { Cart } from './../../admin/carts/carts.model';
import { UsersService } from './../../admin/users/users.service';
import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('User/Cart')
@ApiBearerAuth('JWT-auth')
@Roles('User')
@UseGuards(RolesGuard)
@Controller('cart')
export class CartController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Get user cart' })
  @ApiResponse({ status: 200, type: Cart })
  @Get()
  getCart(@Request() req) {
    return this.usersService.getCart(req.user);
  }
}
