import { Timestamp } from 'src/graphql';

export class ArticleFilterInput {
  readonly title: string;
  readonly authorId: number;
  readonly createdAfter: Timestamp;
  readonly createdBefore: Timestamp;
}
