import { db } from "./DB/db";
import { ICar } from "Types/ICar";

type CarResponse = {
  cars: Array<ICar>;
  totalPageCount: number;
  totalCarsCount: number;
};

export class CarService extends db {
  private tableName: string = "";
  private qs: string = "";
  constructor() {
    super();
    this.tableName = process.env.REACT_APP_CARS_URL as string;
  }

  setParameters(
    manufacture: string,
    color: string,
    sort: string = "asc",
    page: number = 1
  ) {
    this.qs = "";
    if (manufacture) {
      this.qs = "manufacturer=" + manufacture + "&";
    }
    if (color) {
      this.qs += "color=" + color + "&";
    }

    if (sort) {
      this.qs += "&sort=" + sort + "&";
    }

    if (page) {
      this.qs += "page=" + page;
    }
  }

  async read(): Promise<CarResponse> {
    return this.get(`${this.tableName}?${this.qs}`);
  }

  async getOne(id: number): Promise<{ car: ICar }> {
    return this.get(`${this.tableName}/${id}`);
  }
}
