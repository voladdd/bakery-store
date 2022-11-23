import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
import { Body, Controller, Post, Get, Param, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { Role } from './roles.model';

@ApiTags('Admin/Roles')
@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @ApiOperation({
    summary: 'Create role',
    description: 'Only for admin',
  })
  @ApiResponse({ status: 200, type: Role })
  @ApiBearerAuth('JWT-auth')
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.CreateRole(dto);
  }

  @ApiOperation({
    summary: 'Get all roles',
    description: 'Only for admin',
  })
  @ApiResponse({ status: 200, type: [Role] })
  @ApiBearerAuth('JWT-auth')
  @Roles('Admin')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.roleService.getAllRoles();
  }

  @ApiOperation({
    summary: 'Get role info',
    description: 'Only for admin',
  })
  @ApiResponse({ status: 200, type: Role })
  @ApiBearerAuth('JWT-auth')
  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value);
  }
}
