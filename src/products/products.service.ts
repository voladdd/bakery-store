import { FilesService } from './../files/files.service';
import { Product } from './products.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product) private productRepository: typeof Product,
    private fileService: FilesService,
  ) {}

  async CreateProduct(dto: CreateProductDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const post = await this.productRepository.create({
      ...dto,
      image: fileName,
    });
    return post;
  }

  async GetAllProducts() {
    const product = await this.productRepository.findAll();
    return product;
  }

  async getProductById(id: string) {
    const product = await this.productRepository.findOne({ where: { id } });
    return product;
  }

  //getProductByParams
}
