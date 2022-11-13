import { ProductCategories } from './product-categories.model';
import { Category } from './categories/categories.model';
import { FilesModule } from './../files/files.module';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './products.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoriesService } from './categories/categories.service';
import { CategoriesModule } from './categories/categories.module';

@Module({
  providers: [ProductsService, CategoriesService],
  controllers: [ProductsController],
  imports: [
    SequelizeModule.forFeature([Product, Category, ProductCategories]),
    FilesModule,
    CategoriesModule,
  ],
  exports: [ProductsService],
})
export class ProductsModule {}
