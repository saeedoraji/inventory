import { db } from "./DB/db";
import { IManufacture } from "Types/IManufacture";
import { FilterBoxItemType } from "Types/FilterBoxItemType";

type ManufactureResponse = {
  manufacturers: Array<IManufacture>;
};

export class ManufactureService extends db {
  private tableName: string = "";
  constructor() {
    super();
    this.tableName = process.env.REACT_APP_MANUFACTURES_URL as string;
  }

  async read(): Promise<ManufactureResponse> {
    return this.get(this.tableName);
  }

  parseData(manufactures: ManufactureResponse): Array<FilterBoxItemType> {
    return manufactures.manufacturers.map((manufacture: IManufacture) => ({
      title: manufacture.name,
      checked: false,
    }));
  }
}
