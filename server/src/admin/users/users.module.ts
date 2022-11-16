import { CartsModule } from './../carts/carts.module';
import { Cart } from './../carts/carts.model';
import { AuthModule } from 'src/auth/auth.module';
import { RolesModule } from './../roles/roles.module';
import { UserRoles } from '../roles/user-roles.model';
import { Role } from '../roles/roles.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Cart]),
    RolesModule,
    CartsModule,
    forwardRef(() => AuthModule),
  ],
  exports: [UsersService],
})
export class UsersModule {}
