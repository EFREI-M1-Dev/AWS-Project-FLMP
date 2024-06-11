enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export class ArticleSortInput {
  readonly likes: SortOrder;
  readonly createdAt: SortOrder;
}
