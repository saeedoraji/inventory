import React, { FunctionComponent, useState, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { Grid, Typography, Paper } from "@material-ui/core";
import { ProductList } from "Components/ProductList";
import { ICar } from "Types/ICar";
import { FavouriteService } from "Services/FavouriteService";
import { useApp } from "State/AppContext";

export const Favourites: FunctionComponent<RouteComponentProps> = () => {
  const [sharedState] = useApp() as any;

  const [productList, setProductList] = useState([] as Array<ICar>);

  useEffect(() => {
    const favourite = new FavouriteService();
    setProductList(favourite.favouriteToProduct());
  }, [sharedState]);
  return (
    <Grid container spacing={3} style={{ minWidth: "100vw" }}>
      <Grid item xs={12} md={12} lg={12}>
        <Paper style={{ minHeight: "100vh" }}>
          {productList.length ? (
            <ProductList productList={productList} />
          ) : (
            <Typography component="h1">
              There is no favourite list. you can add to your favourite list in
              product page
            </Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};
