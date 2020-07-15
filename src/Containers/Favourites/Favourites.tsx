import React, { FunctionComponent, useState, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { Grid, Typography } from "@material-ui/core";
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
    <Grid container style={{ justifyContent: "center", width: "97vw" }}>
      <Grid item xs={6}>
        {productList.length ? (
          <ProductList productList={productList} />
        ) : (
          <Typography component="h1">
            There is no favourite list. you can add to your favourite list in
            product page
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};
