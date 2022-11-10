import { ProductsService } from './products.service';
import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Продукты')
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() dto: CreateProductDto, @UploadedFile() image: any) {
    return this.productService.CreateProduct(dto, image);
  }
}
