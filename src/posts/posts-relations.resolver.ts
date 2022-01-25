import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Post } from './entities/post.entity';
import { PostsService } from './posts.service';

@Resolver(() => User)
export class PostsUserResolver {
  constructor(private readonly postsService: PostsService) {}

  @ResolveField(() => [Post])
  posts(@Parent() user: User): Promise<Post[]> {
    return this.postsService.findAll({ where: { authorId: user.id } });
  }
}
