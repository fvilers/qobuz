import chalk from "chalk";
import { table } from "table";
import { TABLE_CONFIG } from "../../config";
import QobuzClient from "../../QobuzClient";

type Arguments = { id: string };

export const command = "article <id>";
export const description = "Return metadata for an article";
export const builder = {};
export const handler = async ({ id }: Arguments) => {
  const client = new QobuzClient();
  const article = await client.article.get(id);
  const rows = [
    [chalk.gray("ID"), article.id],
    [chalk.gray("Title"), article.title],
    [chalk.gray("URL"), article.url],
  ];

  console.log(table(rows, TABLE_CONFIG));
};
