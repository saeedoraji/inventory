import { db } from "./DB/db";
import { IFavourite } from "Types/IFavourite";
import { ICar } from "Types/ICar";

export class FavouriteService extends db {
  private tableName: string = "favourite";
  read(): Array<IFavourite> {
    return this.readLocalData(this.tableName) as Array<IFavourite>;
  }

  save(value: IFavourite) {
    const favouriteList: Array<IFavourite> = this.read();
    const currentFavourite = favouriteList.filter(
      (item) => item.productId === value.productId
    );
    let favouriteData: Array<IFavourite> = [];
    if (currentFavourite.length) {
      favouriteData = [
        ...this.read().filter((item) => item.productId !== value.productId),
      ];
    } else {
      favouriteData = [...this.read(), value];
    }
    this.persistLocalData(this.tableName, favouriteData);
  }

  favouriteToProduct(): Array<ICar> {
    const favouriteList = this.read();
    let productList: Array<ICar> = [];
    for (const favourite of favouriteList) {
      let car: ICar = {} as ICar;
      car.color = favourite.summary?.split(" ")[2];
      car.fuelType = favourite.summary?.split(" ")[1];
      car.modelName = favourite.summary?.split(" ")[0];
      car.stockNumber = favourite.productId;
      car.manufacturerName = favourite.title;
      car.pictureUrl = favourite.image;
      productList.push(car);
    }
    return productList;
  }
}
