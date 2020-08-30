import Album from "../models/Album";
import Collection from "../models/Collection";
import QobuzClient from "../QobuzClient";
import QueryParameters from "../types/QueryParameters";

type Extra = "albumsFromSameArtist" | "focus" | "focusAll";
type Featured =
  | "most-streamed"
  | "best-sellers"
  | "new-releases"
  | "press-awards"
  | "editor-picks"
  | "most-featured"
  | "harmonia-mundi"
  | "universal-classic"
  | "universal-jazz"
  | "universal-jeunesse"
  | "universal-chanson"
  | "new-releases-full"
  | "recent-releases"
  | "ideal-discography"
  | "qobuzissims";
type GetFeaturedResponse = { albums: Collection<Album> };

class AlbumEndpoint {
  constructor(private readonly client: QobuzClient) {}

  get(
    albumId: string,
    extra?: Extra,
    limit?: number,
    offset?: number
  ): Promise<Album> {
    const parameters: QueryParameters = { album_id: albumId };

    if (extra !== undefined) {
      parameters["extra"] = extra;
    }

    if (limit !== undefined) {
      parameters["limit"] = limit.toString();
    }

    if (offset !== undefined) {
      parameters["offset"] = offset.toString();
    }

    return this.client.get<Album>("album/get", parameters);
  }

  async getFeatured(
    type: Featured,
    genreId?: string,
    genreIds?: Array<string>,
    limit?: number,
    offset?: number,
    supplierId?: string
  ): Promise<Collection<Album>> {
    const parameters: Record<string, string> = { type };

    if (genreId !== undefined) {
      parameters["genre_id"] = genreId;
    }

    if (genreIds !== undefined) {
      parameters["genre_ids"] = genreIds.join(",");
    }

    if (limit !== undefined) {
      parameters["limit"] = limit.toString();
    }

    if (offset !== undefined) {
      parameters["offset"] = offset.toString();
    }

    if (supplierId !== undefined) {
      parameters["supplier_id"] = supplierId;
    }

    const { albums } = await this.client.get<GetFeaturedResponse>(
      "album/getFeatured",
      parameters
    );

    return albums;
  }
}

export default AlbumEndpoint;
