import { Field, HideField, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  content?: string;

  @Field(() => Boolean)
  published: boolean;

  @HideField()
  authorId: number;
}
