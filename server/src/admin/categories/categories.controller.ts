import { Controller, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('Admin/Categories')
@ApiBearerAuth('JWT-auth')
@Roles('Admin')
@UseGuards(RolesGuard)
@Controller('categories')
export class CategoriesController {}
