import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { ArticleSortInput } from './dto/sort-article.input';
import { ArticleFilterInput } from './dto/filter-article-input';
import { Prisma } from '@prisma/client';
import { getRandomInt } from 'src/utils/random';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  create(createArticleInput: CreateArticleInput, username: string) {
    return this.prisma.article.create({
      data: {
        title: createArticleInput.title,
        content: createArticleInput.content,
        author: {
          connect: { username },
        },
        image: `http://localhost:3000/static/cover-${getRandomInt(1, 4)}.jpg`,
      },
    });
  }

  findAll(filter?: ArticleFilterInput, sort?: ArticleSortInput) {
    const where: Prisma.ArticleWhereInput = {};

    if (filter?.title) {
      where.title = {
        contains: filter.title,
      };
    }

    if (filter?.authorId) {
      where.authorId = filter.authorId;
    }

    if (filter?.createdAfter) {
      where.createdAt = {
        gte: filter.createdAfter,
      };
    }

    if (filter?.createdBefore) {
      where.createdAt = {
        lte: filter.createdBefore,
      };
    }

    const orderBy: Prisma.ArticleOrderByWithRelationInput[] = [];
    if (sort?.likes) {
      orderBy.push({ likes: { _count: sort.likes } });
    }
    if (sort?.createdAt) {
      orderBy.push({ createdAt: sort.createdAt });
    }

    return this.prisma.article.findMany({
      where,
      orderBy,
      include: {
        likes: true,
        author: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.article.findUnique({ where: { id } });
  }

  getArticleLikesCount(id: number) {
    return this.prisma.like.count({
      where: {
        articleId: id,
      },
    });
  }

  getArticleCommentsCount(id: number) {
    return this.prisma.comment.count({
      where: {
        articleId: id,
      },
    });
  }

  async hasUserLikedArticle(articleId: number, userId: number) {
    const like = await this.prisma.like.findUnique({
      where: {
        userId_articleId: {
          userId: userId,
          articleId: articleId,
        },
      },
    });
    return like !== null;
  }

  async update(
    id: number,
    updateArticleInput: UpdateArticleInput,
    username: string,
  ) {
    const article = await this.prisma.article.findUnique({
      where: { id },
      include: { author: true },
    });

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    if (article.author.username !== username) {
      throw new UnauthorizedException(
        'You do not have permission to update this article',
      );
    }

    return this.prisma.article.update({
      data: { ...updateArticleInput },
      where: { id },
    });
  }

  async remove(id: number, username: string) {
    const article = await this.prisma.article.findUnique({
      where: { id },
      include: { author: true },
    });

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    if (article.author.username !== username) {
      throw new UnauthorizedException(
        'You do not have permission to remove this article',
      );
    }

    await this.prisma.like.deleteMany({
      where: { articleId: id },
    });

    await this.prisma.comment.deleteMany({
      where: { articleId: id },
    });

    return this.prisma.article.delete({
      where: { id: id },
    });
  }
}
