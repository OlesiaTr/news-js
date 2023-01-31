import { IArticle, ISource } from './interfaces';

export type TOptions<T> = { [key: string]: T };

export type TData = IArticle | ISource;
