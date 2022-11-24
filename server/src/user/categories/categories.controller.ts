import { CategoriesService } from './../../admin/categories/categories.service';
import { Category } from './../../admin/categories/categories.model';
import { Controller, Get, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('User/Categories')
// @ApiBearerAuth('JWT-auth')
// @Roles('User')
// @UseGuards(RolesGuard)
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Get categories' })
  @ApiResponse({ status: 200, type: Category })
  @Get()
  getAllCategories() {
    return this.categoriesService.getAllCategories();
  }
}
