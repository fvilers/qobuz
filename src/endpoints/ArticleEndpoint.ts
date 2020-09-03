import Article from "../models/Article";
import QobuzClient from "../QobuzClient";
import QueryParameters from "../types/QueryParameters";

class ArticleEndpoint {
  constructor(private readonly client: QobuzClient) {}

  get(articleId: string): Promise<Article> {
    const parameters: QueryParameters = { article_id: articleId };

    return this.client.get<Article>("article/get", parameters);
  }
}

export default ArticleEndpoint;
