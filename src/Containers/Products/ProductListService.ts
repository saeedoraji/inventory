import { CarService } from "Services/CarService";

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
