import { ProductsService } from './products.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';

@ApiTags('Продукты')
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productService.CreateProduct(dto);
  }
}
