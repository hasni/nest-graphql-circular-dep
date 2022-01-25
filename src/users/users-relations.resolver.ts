import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Post } from 'src/posts/entities/post.entity';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => Post)
export class UsersPostResolver {
  constructor(private readonly usersService: UsersService) {}

  @ResolveField(() => User)
  author(@Parent() post: Post): Promise<User> {
    return this.usersService.find({ id: post.authorId });
  }
}
