import { db } from "./DB/db";
import { colors } from "Types/IColor";
import { FilterBoxItemType } from "Types/FilterBoxItemType";

type ColorResponse = {
  colors: Array<colors>;
};

export class ColorService extends db {
  private tableName: string = "";
  constructor() {
    super();
    this.tableName = process.env.REACT_APP_COLORS_URL as string;
  }

  async read(): Promise<ColorResponse> {
    return await this.get(this.tableName);
  }

  parseData(colors: ColorResponse): Array<FilterBoxItemType> {
    return colors.colors.map((color) => ({
      title: color,
      checked: false,
    }));
  }
}
