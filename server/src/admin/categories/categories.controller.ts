import { Controller, Get, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { Category } from './categories.model';
import { CategoriesService } from './categories.service';

@ApiTags('Admin/Categories')
@ApiBearerAuth('JWT-auth')
@Roles('Admin')
@UseGuards(RolesGuard)
@Controller('admin/categories')
export class CategoriesController {}
