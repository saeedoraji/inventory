const initialState = {
  manufactures: "",
  colors: "",
};

export const ProductReducer = (
  state: any = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "SELECTED_FILTER":
      const filterObject: any = {};
      action.payload.forEach(
        (item: { boxName: string; selectedValue: string }) =>
          (filterObject[item.boxName] = item.selectedValue)
      );
      console.log(action.payload);
      return {
        ...state,
        ...filterObject,
      };
    case "FAVROURITE_REMOVED":
      return {
        ...state,
      };
    default:
      throw new Error();
  }
};
