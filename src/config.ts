import { getBorderCharacters } from "table";

export const TABLE_CONFIG = {
  border: getBorderCharacters(`void`),
  columnDefault: {
    paddingLeft: 0,
    paddingRight: 1,
  },
  drawHorizontalLine: () => false,
};
