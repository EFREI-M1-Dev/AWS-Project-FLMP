import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesResolver } from './likes.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [LikesResolver, LikesService, PrismaService],
})
export class LikesModule {}
