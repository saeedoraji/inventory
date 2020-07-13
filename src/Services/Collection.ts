import { ColorService } from "./ColorService";
import { ManufactureService } from "./ManufactureService";

export const getCollectionInstance: any = (title: string) => {
  switch (title.toLowerCase()) {
    case "colors":
      return new ColorService();
    case "manufactures":
      return new ManufactureService();
    default:
      return {};
  }
};
