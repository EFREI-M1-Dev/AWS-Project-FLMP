import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Root,
  Context,
} from '@nestjs/graphql';
import { LikesService } from './likes.service';
import { Like } from '@prisma/client';
import { GraphQLContext } from 'src/interfaces/graphql-context.interface';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver('Like')
export class LikesResolver {
  constructor(private readonly likesService: LikesService) {}

  @ResolveField()
  user(@Root() likes: Like) {
    return this.likesService.findOne(likes.id).user();
  }

  @ResolveField()
  article(@Root() likes: Like) {
    return this.likesService.findOne(likes.id).article();
  }

  @Mutation('createLike')
  @UseGuards(JwtAuthGuard)
  create(
    @Args('articleId') articleId: number,
    @Context() context: GraphQLContext,
  ) {
    return this.likesService.create(articleId, context.req.user.userId);
  }

  @Query('likes')
  findAll() {
    return this.likesService.findAll();
  }

  @Query('like')
  findOne(@Args('id') id: number) {
    return this.likesService.findOne(id);
  }

  @Mutation('removeLike')
  @UseGuards(JwtAuthGuard)
  remove(
    @Args('articleId') articleId: number,
    @Context() context: GraphQLContext,
  ) {
    return this.likesService.remove(articleId, context.req.user.userId);
  }
}
