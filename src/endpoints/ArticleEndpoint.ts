import Album from "../models/Album";
import Article from "../models/Article";
import Artist from "../models/Artist";
import QobuzClient from "../QobuzClient";
import QueryParameters from "../types/QueryParameters";

type GetRelatedContentResponse = {
  albums: Album[];
  artists: Artist[];
  id: string;
};

class ArticleEndpoint {
  constructor(private readonly client: QobuzClient) {}

  get(articleId: string): Promise<Article> {
    const parameters: QueryParameters = { article_id: articleId };

    return this.client.get<Article>("article/get", parameters);
  }

  getRelatedContent(articleId: string): Promise<GetRelatedContentResponse> {
    const parameters: QueryParameters = { article_id: articleId };

    return this.client.get<GetRelatedContentResponse>(
      "article/getRelatedContent",
      parameters
    );
  }
}

export default ArticleEndpoint;
