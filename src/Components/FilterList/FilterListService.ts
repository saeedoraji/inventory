import { getCollectionInstance } from "Services/Collection";
import { FilterBoxItemType } from "Types/FilterBoxItemType";

export const getFilterBoxData = async (
  title: string,
  collectionData: Array<FilterBoxItemType>,
  selectedValue: string
) => {
  if (collectionData?.length) {
    return new Promise((resolve, reject) => {
      try {
        resolve(collectionData);
      } catch (e) {
        reject(e);
      }
    });
  } else {
    let collectionInstance = getCollectionInstance(title);
    return collectionInstance.parseData(await collectionInstance.read());
  }
};
