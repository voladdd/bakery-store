import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
import { Body, Controller, Post, Get, Param, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from './../auth/roles.guard';
import { Role } from './roles.entity';

@ApiTags('Роли')
@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.CreateRole(dto);
  }

  @ApiOperation({ summary: 'Получение всех ролей' })
  @ApiResponse({ status: 200, type: [Role] })
  @Roles('Admin')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.roleService.getAllRoles();
  }

  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value);
  }
}
