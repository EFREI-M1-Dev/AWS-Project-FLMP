import {
  Resolver,
  Query,
  Mutation,
  Args,
  Root,
  Context,
  ResolveField,
} from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { GraphQLContext } from 'src/interfaces/graphql-context.interface';
import { Comment } from '@prisma/client';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver('Comment')
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @ResolveField()
  author(@Root() comments: Comment) {
    return this.commentsService.findOne(comments.id).author();
  }

  @ResolveField()
  article(@Root() comments: Comment) {
    return this.commentsService.findOne(comments.id).article();
  }

  @Mutation('createComment')
  @UseGuards(JwtAuthGuard)
  create(
    @Args('CreateCommentInput') createCommentInput: CreateCommentInput,
    @Context() context: GraphQLContext,
  ) {
    return this.commentsService.create(
      createCommentInput,
      context.req.user.userId,
    );
  }

  @Query('comments')
  findAll() {
    return this.commentsService.findAll();
  }

  @Query('comment')
  findOne(@Args('id') id: number) {
    return this.commentsService.findOne(id);
  }

  @Mutation('updateComment')
  @UseGuards(JwtAuthGuard)
  update(
    @Args('UpdateCommentInput') updateCommentInput: UpdateCommentInput,
    @Context() context: GraphQLContext,
  ) {
    return this.commentsService.update(
      updateCommentInput,
      context.req.user.username,
    );
  }

  @Mutation('removeComment')
  @UseGuards(JwtAuthGuard)
  remove(@Args('id') id: number, @Context() context: GraphQLContext) {
    return this.commentsService.remove(id, context.req.user.username);
  }
}
