import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersPostResolver } from './users-relations.resolver';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [PrismaModule],
  providers: [UsersResolver, UsersService, UsersPostResolver],
  exports: [UsersService],
})
export class UsersModule {}
