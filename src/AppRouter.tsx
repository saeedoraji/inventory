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
import { NotFound } from "Containers/NotFound";

export const AppRouter: FunctionComponent<RouteComponentProps> = () => (
  <AppProvider>
    <Router>
      <App path="/">
        <Inventory path="/inventory" />
        <Inventory path="/" />
        <ProductDetail path="/product-detail/:productId" />
        <Favourites path="/favourites" />
        <NotFound default />
      </App>
    </Router>
  </AppProvider>
);
