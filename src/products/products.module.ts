import { FilesModule } from './../files/files.module';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
// import { User } from 'src/users/users.entity';
import { Product } from './products.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [SequelizeModule.forFeature([Product]), FilesModule],
})
export class ProductsModule {}
