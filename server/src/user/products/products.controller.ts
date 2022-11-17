import { UpdateCartProdcutsDto } from './dto/update-cartProducts.dto';
import { CartProducts } from './../../admin/carts/cart-products.model';
import {
  Controller,
  Get,
  UseGuards,
  Param,
  Post,
  Request,
  Delete,
  Patch,
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
import { Product } from 'src/admin/products/products.model';
import { ProductsService } from 'src/admin/products/products.service';
import { CartsService } from 'src/admin/carts/carts.service';

@ApiTags('User/Products')
@ApiBearerAuth('JWT-auth')
@Roles('User')
@UseGuards(RolesGuard)
@Controller('products')
export class ProductsController {
  constructor(
    private productService: ProductsService,
    private cartsService: CartsService,
  ) {}

  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, type: [Product] })
  @Get()
  getAll() {
    return this.productService.GetAllProducts();
  }

  @ApiOperation({ summary: 'Get product by ID' })
  @ApiResponse({ status: 200, type: Product })
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.productService.getProductById(id);
  }

  @ApiOperation({ summary: 'Add product to cart' })
  @ApiResponse({ status: 200 })
  @Post(':id/cart')
  addToCart(@Request() req, @Param('id') id: number) {
    return this.cartsService.addProduct(req.user.id, id);
  }

  @ApiOperation({ summary: 'Add product to cart' })
  @ApiResponse({ status: 200 })
  @Patch(':id/cart')
  updateCartProductQuantity(
    @Request() req,
    @Param('id') productId: number,
    @Body() dto: UpdateCartProdcutsDto,
  ) {
    return this.cartsService.updateCartProductQuantity(
      req.user.id,
      productId,
      dto.quantity,
    );
  }

  @ApiOperation({ summary: 'Add product to cart' })
  @ApiResponse({ status: 200, type: Product })
  @Delete(':id/cart')
  removeFromCart(@Request() req, @Param('id') id: number) {
    return this.cartsService.removeProduct(req.user.id, id);
  }
}
