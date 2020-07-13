import { colorFavourite } from "Types/IFavourite";

export type ProductViewProps = {
  id: number;
  title: string;
  summary: string;
  image: string;
  price: number;
  colorFavourite: colorFavourite;
};
