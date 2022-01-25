import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PostsUserResolver } from './posts-relations.resolver';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';

@Module({
  imports: [PrismaModule],
  providers: [PostsResolver, PostsService, PostsUserResolver],
  exports: [PostsService],
})
export class PostsModule {}
