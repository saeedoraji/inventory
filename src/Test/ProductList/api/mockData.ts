import { ICar } from "Types/ICar";

export const productListMock: Array<ICar> = [
  {
    stockNumber: 53206,
    manufacturerName: "Volkswagen",
    modelName: "Beetle / New Beetle",
    color: "yellow",
    mileage: { number: 100106, unit: "km" },
    fuelType: "Diesel",
    pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
  },
  {
    stockNumber: 27224,
    manufacturerName: "Mercedes-Benz",
    modelName: "CL-Coupe",
    color: "silver",
    mileage: { number: 100122, unit: "km" },
    fuelType: "Petrol",
    pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
  },
];
