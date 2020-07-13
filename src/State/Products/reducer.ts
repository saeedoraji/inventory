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
      const { boxName, selectedValue } = action.payload;
      return {
        ...state,
        [boxName]: selectedValue,
      };
    case "FAVROURITE_REMOVED":
      return {
        ...state,
      };
    default:
      throw new Error();
  }
};
