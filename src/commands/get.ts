import yargs from "yargs";

export const command = "get <endpoint>";
export const description = "Return the metadata for various endpoints";
export const builder = (yargs: yargs.Argv) => yargs.commandDir("get");
export const handler = () => {};
