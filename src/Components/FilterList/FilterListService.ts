import { getCollectionInstance } from "Services/Collection";
import { FilterBoxItemType } from "Types/FilterBoxItemType";

export const getFilterBoxData = async (
  title: string,
  isShowClearFilter: boolean,
  collectionData: Array<FilterBoxItemType>,
  selectedValue: string
) => {
  if (collectionData?.length) {
    return new Promise((resolve, reject) => {
      try {
        if (!isShowClearFilter) {
          resolve(
            collectionData.map((item: FilterBoxItemType) => {
              return {
                title: item.title,
                checked: false,
              };
            })
          );
        } else {
          resolve(
            collectionData.map((item: FilterBoxItemType) => {
              if (item.title === selectedValue) {
                return {
                  title: item.title,
                  checked: true,
                };
              } else {
                return {
                  title: item.title,
                  checked: false,
                };
              }
            })
          );
        }
      } catch (e) {
        reject(e);
      }
    });
  } else {
    let collectionInstance = getCollectionInstance(title);
    return collectionInstance.parseData(await collectionInstance.read());
  }
};
