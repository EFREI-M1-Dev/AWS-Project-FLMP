import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Timestamp: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  author?: Maybe<User>;
  comments?: Maybe<Array<Comment>>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  likes?: Maybe<Array<Like>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ArticleFilterInput = {
  authorId?: InputMaybe<Scalars['Int']['input']>;
  createdAfter?: InputMaybe<Scalars['Timestamp']['input']>;
  createdBefore?: InputMaybe<Scalars['Timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleSortInput = {
  createdAt?: InputMaybe<SortOrder>;
  likes?: InputMaybe<SortOrder>;
};

export type Comment = {
  __typename?: 'Comment';
  article: Article;
  author: User;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id: Scalars['Int']['output'];
  text: Scalars['String']['output'];
};

export type CreateArticleInput = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateCommentInput = {
  articleId: Scalars['Int']['input'];
  text: Scalars['String']['input'];
};

export type CreateUserInput = {
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Like = {
  __typename?: 'Like';
  article?: Maybe<Article>;
  id: Scalars['Int']['output'];
  user?: Maybe<User>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String']['output'];
  user: User;
};

export type LoginUserInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle: Article;
  createComment: Comment;
  createLike: Like;
  createUser: User;
  login: LoginResponse;
  removeArticle?: Maybe<Article>;
  removeComment?: Maybe<Comment>;
  removeLike?: Maybe<Like>;
  signup: User;
  updateArticle: Article;
  updateComment: Comment;
};


export type MutationCreateArticleArgs = {
  createArticleInput: CreateArticleInput;
};


export type MutationCreateCommentArgs = {
  createCommentInput: CreateCommentInput;
};


export type MutationCreateLikeArgs = {
  articleId: Scalars['Int']['input'];
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRemoveArticleArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveCommentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveLikeArgs = {
  articleId: Scalars['Int']['input'];
};


export type MutationSignupArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationUpdateArticleArgs = {
  updateArticleInput: UpdateArticleInput;
};


export type MutationUpdateCommentArgs = {
  updateCommentInput: UpdateArticleInput;
};

export type Query = {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articles: Array<Maybe<Article>>;
  comment?: Maybe<Comment>;
  comments: Array<Maybe<Comment>>;
  getArticleCommentsCount: Scalars['Int']['output'];
  getArticleLikesCount: Scalars['Int']['output'];
  hasUserLikedArticle: Scalars['Boolean']['output'];
  like?: Maybe<Like>;
  likes: Array<Maybe<Like>>;
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
};


export type QueryArticleArgs = {
  id: Scalars['Int']['input'];
};


export type QueryArticlesArgs = {
  filter?: InputMaybe<ArticleFilterInput>;
  sort?: InputMaybe<ArticleSortInput>;
};


export type QueryCommentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetArticleCommentsCountArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetArticleLikesCountArgs = {
  id: Scalars['Int']['input'];
};


export type QueryHasUserLikedArticleArgs = {
  id: Scalars['Int']['input'];
};


export type QueryLikeArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  username: Scalars['String']['input'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type UpdateArticleInput = {
  content: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type UpdateCommentInput = {
  id: Scalars['Int']['input'];
  text: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  articles?: Maybe<Array<Article>>;
  avatar?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Array<Comment>>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id: Scalars['Int']['output'];
  likes?: Maybe<Array<Like>>;
  username?: Maybe<Scalars['String']['output']>;
};

export type CreateLikeMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type CreateLikeMutation = { __typename?: 'Mutation', createLike: { __typename?: 'Like', id: number } };

export type DeleteLikeMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteLikeMutation = { __typename?: 'Mutation', removeLike?: { __typename?: 'Like', id: number } | null };

export type GetArticleQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetArticleQuery = { __typename?: 'Query', article?: { __typename?: 'Article', title?: string | null, content?: string | null, image?: string | null, createdAt?: any | null, author?: { __typename?: 'User', id: number, username?: string | null, avatar?: string | null } | null, comments?: Array<{ __typename?: 'Comment', text: string, createdAt?: any | null, author: { __typename?: 'User', avatar?: string | null, username?: string | null } }> | null } | null };

export type GetHasUserLikedArticleQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetHasUserLikedArticleQuery = { __typename?: 'Query', hasUserLikedArticle: boolean };

export type GetNumberLikeQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetNumberLikeQuery = { __typename?: 'Query', getArticleLikesCount: number };

export type RemoveArticleMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type RemoveArticleMutation = { __typename?: 'Mutation', removeArticle?: { __typename?: 'Article', id: number } | null };

export type CreateArticleMutationVariables = Exact<{
  input: CreateArticleInput;
}>;


export type CreateArticleMutation = { __typename?: 'Mutation', createArticle: { __typename?: 'Article', id: number, title?: string | null, content?: string | null } };

export type UpdateArticleMutationVariables = Exact<{
  input: UpdateArticleInput;
}>;


export type UpdateArticleMutation = { __typename?: 'Mutation', updateArticle: { __typename?: 'Article', id: number, title?: string | null, content?: string | null } };

export type GetArticlesQueryVariables = Exact<{
  sort: ArticleSortInput;
}>;


export type GetArticlesQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Article', id: number, title?: string | null, content?: string | null, image?: string | null, createdAt?: any | null, likes?: Array<{ __typename?: 'Like', id: number }> | null, author?: { __typename?: 'User', username?: string | null, avatar?: string | null } | null, comments?: Array<{ __typename?: 'Comment', id: number }> | null } | null> };

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', token: string, user: { __typename?: 'User', username?: string | null, avatar?: string | null } } };

export type RegisterMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', username?: string | null } };


export const CreateLikeDocument = gql`
    mutation CreateLike($id: Int!) {
  createLike(articleId: $id) {
    id
  }
}
    `;
export type CreateLikeMutationFn = Apollo.MutationFunction<CreateLikeMutation, CreateLikeMutationVariables>;

/**
 * __useCreateLikeMutation__
 *
 * To run a mutation, you first call `useCreateLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLikeMutation, { data, loading, error }] = useCreateLikeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCreateLikeMutation(baseOptions?: Apollo.MutationHookOptions<CreateLikeMutation, CreateLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLikeMutation, CreateLikeMutationVariables>(CreateLikeDocument, options);
      }
export type CreateLikeMutationHookResult = ReturnType<typeof useCreateLikeMutation>;
export type CreateLikeMutationResult = Apollo.MutationResult<CreateLikeMutation>;
export type CreateLikeMutationOptions = Apollo.BaseMutationOptions<CreateLikeMutation, CreateLikeMutationVariables>;
export const DeleteLikeDocument = gql`
    mutation DeleteLike($id: Int!) {
  removeLike(articleId: $id) {
    id
  }
}
    `;
export type DeleteLikeMutationFn = Apollo.MutationFunction<DeleteLikeMutation, DeleteLikeMutationVariables>;

/**
 * __useDeleteLikeMutation__
 *
 * To run a mutation, you first call `useDeleteLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLikeMutation, { data, loading, error }] = useDeleteLikeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteLikeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLikeMutation, DeleteLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLikeMutation, DeleteLikeMutationVariables>(DeleteLikeDocument, options);
      }
export type DeleteLikeMutationHookResult = ReturnType<typeof useDeleteLikeMutation>;
export type DeleteLikeMutationResult = Apollo.MutationResult<DeleteLikeMutation>;
export type DeleteLikeMutationOptions = Apollo.BaseMutationOptions<DeleteLikeMutation, DeleteLikeMutationVariables>;
export const GetArticleDocument = gql`
    query GetArticle($id: Int!) {
  article(id: $id) {
    title
    content
    image
    createdAt
    author {
      id
      username
      avatar
    }
    comments {
      text
      createdAt
      author {
        avatar
        username
      }
    }
  }
}
    `;

/**
 * __useGetArticleQuery__
 *
 * To run a query within a React component, call `useGetArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetArticleQuery(baseOptions: Apollo.QueryHookOptions<GetArticleQuery, GetArticleQueryVariables> & ({ variables: GetArticleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArticleQuery, GetArticleQueryVariables>(GetArticleDocument, options);
      }
export function useGetArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticleQuery, GetArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArticleQuery, GetArticleQueryVariables>(GetArticleDocument, options);
        }
export function useGetArticleSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetArticleQuery, GetArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetArticleQuery, GetArticleQueryVariables>(GetArticleDocument, options);
        }
export type GetArticleQueryHookResult = ReturnType<typeof useGetArticleQuery>;
export type GetArticleLazyQueryHookResult = ReturnType<typeof useGetArticleLazyQuery>;
export type GetArticleSuspenseQueryHookResult = ReturnType<typeof useGetArticleSuspenseQuery>;
export type GetArticleQueryResult = Apollo.QueryResult<GetArticleQuery, GetArticleQueryVariables>;
export const GetHasUserLikedArticleDocument = gql`
    query GetHasUserLikedArticle($id: Int!) {
  hasUserLikedArticle(id: $id)
}
    `;

/**
 * __useGetHasUserLikedArticleQuery__
 *
 * To run a query within a React component, call `useGetHasUserLikedArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHasUserLikedArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHasUserLikedArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetHasUserLikedArticleQuery(baseOptions: Apollo.QueryHookOptions<GetHasUserLikedArticleQuery, GetHasUserLikedArticleQueryVariables> & ({ variables: GetHasUserLikedArticleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHasUserLikedArticleQuery, GetHasUserLikedArticleQueryVariables>(GetHasUserLikedArticleDocument, options);
      }
export function useGetHasUserLikedArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHasUserLikedArticleQuery, GetHasUserLikedArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHasUserLikedArticleQuery, GetHasUserLikedArticleQueryVariables>(GetHasUserLikedArticleDocument, options);
        }
export function useGetHasUserLikedArticleSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetHasUserLikedArticleQuery, GetHasUserLikedArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHasUserLikedArticleQuery, GetHasUserLikedArticleQueryVariables>(GetHasUserLikedArticleDocument, options);
        }
export type GetHasUserLikedArticleQueryHookResult = ReturnType<typeof useGetHasUserLikedArticleQuery>;
export type GetHasUserLikedArticleLazyQueryHookResult = ReturnType<typeof useGetHasUserLikedArticleLazyQuery>;
export type GetHasUserLikedArticleSuspenseQueryHookResult = ReturnType<typeof useGetHasUserLikedArticleSuspenseQuery>;
export type GetHasUserLikedArticleQueryResult = Apollo.QueryResult<GetHasUserLikedArticleQuery, GetHasUserLikedArticleQueryVariables>;
export const GetNumberLikeDocument = gql`
    query GetNumberLike($id: Int!) {
  getArticleLikesCount(id: $id)
}
    `;

/**
 * __useGetNumberLikeQuery__
 *
 * To run a query within a React component, call `useGetNumberLikeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNumberLikeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNumberLikeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetNumberLikeQuery(baseOptions: Apollo.QueryHookOptions<GetNumberLikeQuery, GetNumberLikeQueryVariables> & ({ variables: GetNumberLikeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNumberLikeQuery, GetNumberLikeQueryVariables>(GetNumberLikeDocument, options);
      }
export function useGetNumberLikeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNumberLikeQuery, GetNumberLikeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNumberLikeQuery, GetNumberLikeQueryVariables>(GetNumberLikeDocument, options);
        }
export function useGetNumberLikeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetNumberLikeQuery, GetNumberLikeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNumberLikeQuery, GetNumberLikeQueryVariables>(GetNumberLikeDocument, options);
        }
export type GetNumberLikeQueryHookResult = ReturnType<typeof useGetNumberLikeQuery>;
export type GetNumberLikeLazyQueryHookResult = ReturnType<typeof useGetNumberLikeLazyQuery>;
export type GetNumberLikeSuspenseQueryHookResult = ReturnType<typeof useGetNumberLikeSuspenseQuery>;
export type GetNumberLikeQueryResult = Apollo.QueryResult<GetNumberLikeQuery, GetNumberLikeQueryVariables>;
export const RemoveArticleDocument = gql`
    mutation RemoveArticle($id: Int!) {
  removeArticle(id: $id) {
    id
  }
}
    `;
export type RemoveArticleMutationFn = Apollo.MutationFunction<RemoveArticleMutation, RemoveArticleMutationVariables>;

/**
 * __useRemoveArticleMutation__
 *
 * To run a mutation, you first call `useRemoveArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeArticleMutation, { data, loading, error }] = useRemoveArticleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveArticleMutation(baseOptions?: Apollo.MutationHookOptions<RemoveArticleMutation, RemoveArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveArticleMutation, RemoveArticleMutationVariables>(RemoveArticleDocument, options);
      }
export type RemoveArticleMutationHookResult = ReturnType<typeof useRemoveArticleMutation>;
export type RemoveArticleMutationResult = Apollo.MutationResult<RemoveArticleMutation>;
export type RemoveArticleMutationOptions = Apollo.BaseMutationOptions<RemoveArticleMutation, RemoveArticleMutationVariables>;
export const CreateArticleDocument = gql`
    mutation CreateArticle($input: CreateArticleInput!) {
  createArticle(createArticleInput: $input) {
    id
    title
    content
  }
}
    `;
export type CreateArticleMutationFn = Apollo.MutationFunction<CreateArticleMutation, CreateArticleMutationVariables>;

/**
 * __useCreateArticleMutation__
 *
 * To run a mutation, you first call `useCreateArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createArticleMutation, { data, loading, error }] = useCreateArticleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateArticleMutation(baseOptions?: Apollo.MutationHookOptions<CreateArticleMutation, CreateArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateArticleMutation, CreateArticleMutationVariables>(CreateArticleDocument, options);
      }
export type CreateArticleMutationHookResult = ReturnType<typeof useCreateArticleMutation>;
export type CreateArticleMutationResult = Apollo.MutationResult<CreateArticleMutation>;
export type CreateArticleMutationOptions = Apollo.BaseMutationOptions<CreateArticleMutation, CreateArticleMutationVariables>;
export const UpdateArticleDocument = gql`
    mutation UpdateArticle($input: UpdateArticleInput!) {
  updateArticle(updateArticleInput: $input) {
    id
    title
    content
  }
}
    `;
export type UpdateArticleMutationFn = Apollo.MutationFunction<UpdateArticleMutation, UpdateArticleMutationVariables>;

/**
 * __useUpdateArticleMutation__
 *
 * To run a mutation, you first call `useUpdateArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateArticleMutation, { data, loading, error }] = useUpdateArticleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateArticleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateArticleMutation, UpdateArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateArticleMutation, UpdateArticleMutationVariables>(UpdateArticleDocument, options);
      }
export type UpdateArticleMutationHookResult = ReturnType<typeof useUpdateArticleMutation>;
export type UpdateArticleMutationResult = Apollo.MutationResult<UpdateArticleMutation>;
export type UpdateArticleMutationOptions = Apollo.BaseMutationOptions<UpdateArticleMutation, UpdateArticleMutationVariables>;
export const GetArticlesDocument = gql`
    query GetArticles($sort: ArticleSortInput!) {
  articles(sort: $sort) {
    id
    title
    content
    image
    likes {
      id
    }
    createdAt
    author {
      username
      avatar
    }
    comments {
      id
    }
  }
}
    `;

/**
 * __useGetArticlesQuery__
 *
 * To run a query within a React component, call `useGetArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticlesQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetArticlesQuery(baseOptions: Apollo.QueryHookOptions<GetArticlesQuery, GetArticlesQueryVariables> & ({ variables: GetArticlesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArticlesQuery, GetArticlesQueryVariables>(GetArticlesDocument, options);
      }
export function useGetArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticlesQuery, GetArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArticlesQuery, GetArticlesQueryVariables>(GetArticlesDocument, options);
        }
export function useGetArticlesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetArticlesQuery, GetArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetArticlesQuery, GetArticlesQueryVariables>(GetArticlesDocument, options);
        }
export type GetArticlesQueryHookResult = ReturnType<typeof useGetArticlesQuery>;
export type GetArticlesLazyQueryHookResult = ReturnType<typeof useGetArticlesLazyQuery>;
export type GetArticlesSuspenseQueryHookResult = ReturnType<typeof useGetArticlesSuspenseQuery>;
export type GetArticlesQueryResult = Apollo.QueryResult<GetArticlesQuery, GetArticlesQueryVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginUserInput!) {
  login(loginUserInput: $input) {
    user {
      username
      avatar
    }
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: LoginUserInput!) {
  signup(loginUserInput: $input) {
    username
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;