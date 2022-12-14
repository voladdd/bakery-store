import { Order } from './admin/orders/orders.model';
import { CartProducts } from './admin/carts/cart-products.model';
import { Cart } from './admin/carts/carts.model';
import { ProductCategories } from './admin/products/product-categories.model';
import { Category } from './admin/categories/categories.model';
import { CategoriesModule } from './admin/categories/categories.module';
import { Product } from './admin/products/products.model';
import { UserRoles } from './admin/roles/user-roles.model';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './admin/users/users.model';
import { UsersModule } from './admin/users/users.module';
import { RolesModule } from './admin/roles/roles.module';
import { Role } from './admin/roles/roles.model';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './admin/products/products.module';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CartsModule } from './admin/carts/carts.module';
import { CartModule } from './user/cart/cart.module';
import { OrdersModule } from './admin/orders/orders.module';
import { CategoriesController } from './user/categories/categories.controller';
import { OrdersController } from './seller/orders/orders.controller';
import * as path from 'path';

@Module({
  controllers: [CategoriesController, OrdersController],
  providers: [],
  imports: [
    ServeStaticModule.forRoot({
      serveRoot: '/public',
      rootPath: path.resolve(__dirname, '..', 'public'),
    }),
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        User,
        Role,
        UserRoles,
        Product,
        Category,
        ProductCategories,
        Cart,
        CartProducts,
        Order,
      ],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    ProductsModule,
    CategoriesModule,
    CartsModule,
    AuthModule,
    FilesModule,
    CartModule,
    OrdersModule,
  ],
})
export class AppModule {}
