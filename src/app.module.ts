import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PostsModule } from './posts/posts.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PrismaModule,
    GraphQLModule.forRoot({
      buildSchemaOptions: { numberScalarMode: 'integer' },
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    UsersModule,
    PostsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
