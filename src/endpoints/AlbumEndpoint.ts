import Album from "../models/Album";
import QobuzClient from "../QobuzClient";
import QueryParameters from "../types/QueryParameters";

type Extra = "albumsFromSameArtist" | "focus" | "focusAll";

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
}

export default AlbumEndpoint;
