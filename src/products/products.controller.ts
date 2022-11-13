import { AddCategoryDto } from './dto/add-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './categories/categories.model';
import { Product } from './products.model';
import { CategoriesService } from './categories/categories.service';
import { ProductsService } from './products.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Продукты')
@Controller('products')
export class ProductsController {
  constructor(
    private productService: ProductsService,
    private categoryService: CategoriesService,
  ) {}

  @ApiOperation({ summary: 'Создание продукта' })
  @ApiResponse({ status: 200, type: Product })
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() dto: CreateProductDto, @UploadedFile() image: any) {
    return this.productService.CreateProduct(dto, image);
  }

  @ApiOperation({ summary: 'Получение всех продуктов' })
  @ApiResponse({ status: 200, type: [Product] })
  @Get()
  getAll() {
    return this.productService.GetAllProducts();
  }

  @ApiOperation({ summary: 'Получение всех категорий' })
  @ApiResponse({ status: 200, type: [Category] })
  @Get('categories')
  getAllCategories() {
    return this.categoryService.getAllCategories();
  }

  @ApiOperation({ summary: 'Создание категории' })
  @ApiResponse({ status: 200, type: Category })
  @Post('categories')
  createCategory(@Body() dto: CreateCategoryDto) {
    return this.categoryService.CreateCategory(dto);
  }

  @ApiOperation({ summary: 'Выдать категорию' })
  @ApiResponse({ status: 200 })
  @Post('category')
  addCategory(@Body() dto: AddCategoryDto) {
    return this.productService.addCategory(dto);
  }

  @ApiOperation({ summary: 'Получение продукта по id' })
  @ApiResponse({ status: 200, type: Product })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }
}
