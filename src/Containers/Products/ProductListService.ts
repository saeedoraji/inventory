import { CarService } from "Services/CarService";
import { ICar } from "Types/ICar";

export const getProductList = async (
  page: number = 1,
  sort: string = "asc",
  sharedState: any = {}
) => {
  let productInstance = new CarService();
  let manufactures = null,
    colors = null;
  if (sharedState?.colors) {
    colors = sharedState.colors;
  }

  if (sharedState?.manufactures) {
    manufactures = sharedState.manufactures;
  }

  productInstance.setParameters(manufactures, colors, sort, page);
  return await productInstance.read();
};

export const createProductDataFake = (): Array<ICar> => {
  const car: ICar = {
    stockNumber: 0,
    modelName: "",
    manufacturerName: "",
    mileage: {
      number: 0,
      unit: "",
    },
    fuelType: "",
    pictureUrl: "",
    color: "",
  };
  const fakeData: any = Array(10);
  return fakeData.fill(car);
};
