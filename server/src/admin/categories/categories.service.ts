import { ProductCategories } from './../products/product-categories.model';
import { Product } from './../products/products.model';
import { Category } from './categories.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Sequelize } from 'sequelize';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category) private categoryRepository: typeof Category,
    @InjectModel(ProductCategories)
    private productCategories: typeof ProductCategories,
  ) {}

  async CreateCategory(dto: CreateCategoryDto) {
    const category = await this.categoryRepository.create(dto);
    return category;
  }

  async getCategoryByTitle(title: string) {
    const category = await this.categoryRepository.findOne({
      where: { title },
    });
    return category;
  }

  async getAllCategories() {
    const categories = await this.categoryRepository.findAll({
      include: Product,
    });
    //need to optimize via sequilize fn, or create few request with count and then add to returned obj
    return categories.map((category) => ({
      id: category.id,
      title: category.title,
      description: category.description,
      count: category.products.length,
    }));
  }
}
