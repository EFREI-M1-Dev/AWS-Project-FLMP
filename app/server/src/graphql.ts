
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export interface ArticleSortInput {
    likes?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
}

export interface ArticleFilterInput {
    title?: Nullable<string>;
    authorId?: Nullable<number>;
    createdAfter?: Nullable<Timestamp>;
    createdBefore?: Nullable<Timestamp>;
}

export interface CreateArticleInput {
    title: string;
    content: string;
}

export interface UpdateArticleInput {
    id: number;
    title: string;
    content: string;
}

export interface LoginUserInput {
    username: string;
    password: string;
}

export interface CreateCommentInput {
    articleId: number;
    text: string;
}

export interface UpdateCommentInput {
    id: number;
    text: string;
}

export interface CreateUserInput {
    username?: Nullable<string>;
    password?: Nullable<string>;
}

export interface Article {
    id: number;
    title?: Nullable<string>;
    content?: Nullable<string>;
    image?: Nullable<string>;
    createdAt?: Nullable<Timestamp>;
    author?: Nullable<User>;
    likes?: Nullable<Like[]>;
    comments?: Nullable<Comment[]>;
}

export interface IQuery {
    articles(filter?: Nullable<ArticleFilterInput>, sort?: Nullable<ArticleSortInput>): Nullable<Article>[] | Promise<Nullable<Article>[]>;
    article(id: number): Nullable<Article> | Promise<Nullable<Article>>;
    getArticleLikesCount(id: number): number | Promise<number>;
    getArticleCommentsCount(id: number): number | Promise<number>;
    hasUserLikedArticle(id: number): boolean | Promise<boolean>;
    comments(): Nullable<Comment>[] | Promise<Nullable<Comment>[]>;
    comment(id: number): Nullable<Comment> | Promise<Nullable<Comment>>;
    likes(): Nullable<Like>[] | Promise<Nullable<Like>[]>;
    like(id: number): Nullable<Like> | Promise<Nullable<Like>>;
    users(): Nullable<User>[] | Promise<Nullable<User>[]>;
    user(username: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createArticle(createArticleInput: CreateArticleInput): Article | Promise<Article>;
    updateArticle(updateArticleInput: UpdateArticleInput): Article | Promise<Article>;
    removeArticle(id: number): Nullable<Article> | Promise<Nullable<Article>>;
    login(loginUserInput: LoginUserInput): LoginResponse | Promise<LoginResponse>;
    signup(loginUserInput: LoginUserInput): User | Promise<User>;
    createComment(createCommentInput: CreateCommentInput): Comment | Promise<Comment>;
    updateComment(updateCommentInput: UpdateArticleInput): Comment | Promise<Comment>;
    removeComment(id: number): Nullable<Comment> | Promise<Nullable<Comment>>;
    createLike(articleId: number): Like | Promise<Like>;
    removeLike(articleId: number): Nullable<Like> | Promise<Nullable<Like>>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
}

export interface LoginResponse {
    user: User;
    token: string;
}

export interface Comment {
    id: number;
    text: string;
    createdAt?: Nullable<Timestamp>;
    author: User;
    article: Article;
}

export interface Like {
    id: number;
    user?: Nullable<User>;
    article?: Nullable<Article>;
}

export interface User {
    id: number;
    username?: Nullable<string>;
    avatar?: Nullable<string>;
    createdAt?: Nullable<Timestamp>;
    articles?: Nullable<Article[]>;
    likes?: Nullable<Like[]>;
    comments?: Nullable<Comment[]>;
}

export type Timestamp = any;
type Nullable<T> = T | null;
