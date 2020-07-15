import { CarService } from "Services/CarService";

export const getProduct = async (productId: number) => {
  const productInstance = new CarService();
  return await productInstance.getOne(productId);
};
