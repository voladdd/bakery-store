import { GetProductsByCategoryIdQueryDto } from './../../user/products/dto/get-productsByCategoryIdQuery.dto';
import { Category } from '../categories/categories.model';
import { AddCategoryDto } from '../categories/dto/add-category.dto';
import { CategoriesService } from '../categories/categories.service';
import { FilesService } from 'src/files/files.service';
import { Product } from './products.model';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product) private productRepository: typeof Product,
    private fileService: FilesService,
    private categoryService: CategoriesService,
  ) {}

  async CreateProduct(dto: CreateProductDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const product = await this.productRepository.create({
      ...dto,
      image: fileName,
    });
    return product;
  }

  async GetAllProducts() {
    const product = await this.productRepository.findAll({ include: Category });
    return product;
  }

  async getProductsByCategoryId(
    id: number,
    dto: GetProductsByCategoryIdQueryDto,
  ) {
    const products = await this.productRepository.findAll({
      limit: 10,
      offset: 10 * (dto.page - 1),
      include: {
        model: Category,
        as: 'categories',
        where: {
          id: id,
        },
      },
    });
    return products;
  }

  async getProductById(id: number) {
    const product = await this.productRepository.findOne({
      where: { id },
      include: Category,
    });
    return product;
  }

  async addCategoryToProduct(id: number, dto: AddCategoryDto) {
    const product = await this.productRepository.findByPk(id);
    const category = await this.categoryService.getCategoryByTitle(dto.title);
    if (category && product) {
      await product.$add('category', product.id);
      return dto;
    }
    throw new HttpException(
      'Пользователь или роль не найдены',
      HttpStatus.NOT_FOUND,
    );
  }
}
