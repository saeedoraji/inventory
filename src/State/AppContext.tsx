import React, {
  useContext,
  FunctionComponent,
  useReducer,
  createContext,
} from "react";
import { ProductReducer } from "State/Products/reducer";

const ContextState = createContext([]);

const useApp = () => {
  const context = useContext(ContextState);
  if (!context) {
    throw new Error(`useAppState must be used within a AppProvider`);
  }
  return context;
};

const AppProvider: FunctionComponent = (props) => {
  const [state, dispatch] = useReducer(ProductReducer, {});
  return <ContextState.Provider value={[state, dispatch] as any} {...props} />;
};

export { useApp, AppProvider };
