import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async create(createCommentInput: CreateCommentInput, authorId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: authorId } });

    if (!user) {
      throw new NotFoundException('Author not found');
    }

    const article = await this.prisma.article.findUnique({
      where: { id: createCommentInput.articleId },
    });

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    if (createCommentInput.text.length < 1) {
      throw new BadRequestException('Text is too short');
    }

    return this.prisma.comment.create({
      data: {
        authorId: authorId,
        articleId: createCommentInput.articleId,
        text: createCommentInput.text,
      },
    });
  }

  findAll() {
    return this.prisma.comment.findMany();
  }

  findOne(id: number) {
    return this.prisma.comment.findUnique({ where: { id: id } });
  }

  async update(updateCommentInput: UpdateCommentInput, username: string) {
    const comment = await this.prisma.comment.findUnique({
      where: { id: updateCommentInput.id },
      include: { author: true },
    });

    if (!comment) {
      throw new NotFoundException('Comment not found');
    }

    if (comment.author.username !== username) {
      throw new UnauthorizedException(
        'You do not have permission to update this comment',
      );
    }

    return this.prisma.comment.update({
      where: { id: updateCommentInput.id },
      data: { text: updateCommentInput.text },
    });
  }

  async remove(id: number, username: string) {
    const comment = await this.prisma.comment.findUnique({
      where: { id },
      include: { author: true },
    });

    if (!comment) {
      throw new NotFoundException('Comment not found');
    }

    if (comment.author.username !== username) {
      throw new UnauthorizedException(
        'You do not have permission to remove this comment',
      );
    }

    return this.prisma.comment.delete({ where: { id: id } });
  }
}
