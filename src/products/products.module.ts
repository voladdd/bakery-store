import { FilesModule } from './../files/files.module';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './products.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [SequelizeModule.forFeature([Product]), FilesModule],
})
export class ProductsModule {}
