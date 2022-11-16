import { AddCategoryDto } from '../categories/dto/add-category.dto';
import { CreateCategoryDto } from '../categories/dto/create-category.dto';
import { Category } from '../categories/categories.model';
import { Product } from './products.model';
import { CategoriesService } from '../categories/categories.service';
import { ProductsService } from './products.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('Admin/Products')
@ApiBearerAuth('JWT-auth')
@Roles('Admin')
@UseGuards(RolesGuard)
@Controller('admin/products')
export class ProductsController {
  constructor(
    private productService: ProductsService,
    private categoryService: CategoriesService,
  ) {}

  @ApiOperation({ summary: 'Create product' })
  @ApiResponse({ status: 200, type: Product })
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() dto: CreateProductDto, @UploadedFile() image: any) {
    return this.productService.CreateProduct(dto, image);
  }

  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, type: [Product] })
  @Get()
  getAll() {
    return this.productService.GetAllProducts();
  }

  // @ApiOperation({ summary: 'Получение всех категорий' })
  // @ApiResponse({ status: 200, type: [Category] })
  // @Get('categories')
  // getAllCategories() {
  //   return this.categoryService.getAllCategories();
  // }

  // @ApiOperation({ summary: 'Create category' })
  // @ApiResponse({ status: 200, type: Category })
  // @Post('categories')
  // createCategory(@Body() dto: CreateCategoryDto) {
  //   return this.categoryService.CreateCategory(dto);
  // }

  @ApiOperation({ summary: 'Get product by ID' })
  @ApiResponse({ status: 200, type: Product })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  @ApiOperation({ summary: 'Add category to product' })
  @ApiResponse({ status: 200 })
  @Post(':id/categories')
  addCategory(@Param('id') id: string, @Body() dto: AddCategoryDto) {
    return this.productService.addCategoryToProduct(id, dto);
  }
}
