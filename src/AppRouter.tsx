/**
 * @prettier
 */

import React, { FunctionComponent } from "react";
import { Router, RouteComponentProps } from "@reach/router";
import App from "App";
import { AppProvider } from "State/AppContext";
import { Inventory } from "Containers/Inventory";
import { ProductDetail } from "Containers/ProductDetail";
import { Favourites } from "Containers/Favourites";

export const AppRouter: FunctionComponent<RouteComponentProps> = () => (
  <AppProvider>
    <Router>
      <App path="/">
        <Inventory path="/inventory" default />
        <ProductDetail path="/product-detail/:productId" />
        <Favourites path="/favourites" />
      </App>
    </Router>
  </AppProvider>
);
