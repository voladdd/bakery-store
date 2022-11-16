import { JwtModule } from '@nestjs/jwt';
import { ProductCategories } from '../products/product-categories.model';
import { Category } from './categories.model';
import { Product } from '../products/products.model';
import { CategoriesService } from './categories.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoriesController } from './categories.controller';

@Module({
  providers: [CategoriesService],
  imports: [
    SequelizeModule.forFeature([Product, Category, ProductCategories]),
    JwtModule,
  ],
  exports: [CategoriesService],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
