import { UserRoles } from './user-roles.entity';
import { User } from './../users/users.entity';
import { Role } from './roles.entity';
import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [SequelizeModule.forFeature([Role, User, UserRoles]), AuthModule],
  exports: [RolesService],
})
export class RolesModule {}
