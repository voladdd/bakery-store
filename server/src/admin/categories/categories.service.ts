import { Category } from './categories.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category) private categoryRepository: typeof Category,
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
    const category = await this.categoryRepository.findAll();
    return category;
  }
}
