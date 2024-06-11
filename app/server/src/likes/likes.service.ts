import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LikesService {
  constructor(private prisma: PrismaService) {}

  async create(articleId: number, userId: number) {
    const article = await this.prisma.article.findUnique({
      where: { id: articleId },
    });

    if (!article) {
      throw new NotFoundException(`Article not found`);
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User not found`);
    }

    return this.prisma.like.create({
      data: {
        userId: userId,
        articleId: articleId,
      },
    });
  }

  findAll() {
    return this.prisma.like.findMany();
  }

  findOne(id: number) {
    return this.prisma.like.findUnique({ where: { id } });
  }

  remove(articleId: number, userId: number) {
    return this.prisma.like.delete({
      where: {
        userId_articleId: {
          userId: userId,
          articleId: articleId,
        },
      },
    });
  }
}
