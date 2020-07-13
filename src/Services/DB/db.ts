import { fetchApi } from "./fetch";

import { LocalStorage } from "Services/LocalStorage";

export class db {
  private dbUrl: string = process.env.REACT_APP_DATABASE_URL as string;
  private baseApiVersionUrl: string = process.env
    .REACT_APP_BASE_API_VERSION_URL as string;

  protected async get(tableName: string): Promise<any> {
    return await fetchApi.get(
      `${this.dbUrl}${this.baseApiVersionUrl}${tableName}`
    );
  }

  protected persistLocalData(key: string, value: Object) {
    const ls = new LocalStorage(key);
    ls.key = value;
  }

  protected readLocalData(key: string) {
    const ls = new LocalStorage(key);
    return ls.key;
  }
  // TODO: save data into database
  //   async save() {}
}
