import { AuthModule } from 'src/auth/auth.module';
import { CartProducts } from '../carts/cart-products.model';
// import { CartsModule } from './../carts/carts.module';
import { Cart } from '../carts/carts.model';
import { ProductCategories } from './product-categories.model';
import { Category } from '../categories/categories.model';
import { FilesModule } from 'src/files/files.module';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsController as UserProuductsController } from 'src/user/products/products.controller';
import { Product } from './products.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoriesService } from '../categories/categories.service';
import { CategoriesModule } from '../categories/categories.module';
import { CartsModule } from '../carts/carts.module';

@Module({
  providers: [ProductsService, CategoriesService],
  controllers: [ProductsController, UserProuductsController],
  imports: [
    SequelizeModule.forFeature([
      Product,
      Category,
      ProductCategories,
      Cart,
      CartProducts,
    ]),
    FilesModule,
    CategoriesModule,
    CartsModule,
    AuthModule,
  ],
  exports: [ProductsService],
})
export class ProductsModule {}
