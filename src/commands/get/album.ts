import QobuzClient from "../../QobuzClient";

type Arguments = { id: string };

export const command = "album <id>";
export const description = "Return metadata for an album";
export const builder = {};
export const handler = async ({ id }: Arguments) => {
  const client = new QobuzClient();
  const album = await client.album.get(id);

  console.log(album.title);
};
