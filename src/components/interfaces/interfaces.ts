export interface Init {
    id: string;
    name: string;
}

export interface IKey {
    apiKey: string;
}

export interface ISourceItem {
    draw(data: []): void;
}

export interface IArticle {
    source: Init;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface INewsData {
    articles: IArticle[];
    totalResults: number;
    status: string;
}

export interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface ISourceData {
    sources: Array<ISource>;
    status: string;
}
