import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Post } from 'src/posts/entities/post.entity';
import { PostsService } from 'src/posts/posts.service';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly postsService: PostsService,
    private readonly usersService: UsersService,
  ) {}

  @Query(() => [User])
  users() {
    return this.usersService.findAll({});
  }

  @Query(() => User)
  user(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.find({ id });
  }

  /**
   * Field resolvers
   */

  @ResolveField(() => [Post])
  posts(@Parent() user: User): Promise<Post[]> {
    return this.postsService.findAll({ where: { authorId: user.id } });
  }
}
