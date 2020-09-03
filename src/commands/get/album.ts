import chalk from "chalk";
import { table } from "table";
import { TABLE_CONFIG } from "../../config";
import Track from "../../models/Track";
import QobuzClient from "../../QobuzClient";

type Arguments = { id: string };

function getAlbumDuration(tracks: Track[]): string {
  const total = tracks.reduce((prev, curr) => prev + curr.duration, 0);
  const hours = Math.floor(total / 3600);
  const totalWithoutHours = total % 3600;
  const minutes = Math.floor(totalWithoutHours / 60);
  const seconds = totalWithoutHours % 60;

  // TODO : don't display hours if 0
  return `${hours}h ${minutes}m ${seconds}s`;
}

export const command = "album <id>";
export const description = "Return metadata for an album";
export const builder = {};
export const handler = async ({ id }: Arguments) => {
  const client = new QobuzClient();
  const album = await client.album.get(id);
  const rows = [
    [chalk.gray("ID"), album.id],
    [chalk.gray("Title"), album.title],
    [chalk.gray("Artist"), album.artist.name],
    [
      chalk.gray("Description"),
      // TODO : format date
      `Published by ${album.label.name} on ${album.release_date_original}`,
    ],
    [
      "",
      `${album.genre.name} - ${album.tracks_count} tracks - ${getAlbumDuration(
        album.tracks.items
      )}`,
    ],
  ];

  console.log(table(rows, TABLE_CONFIG));
};
