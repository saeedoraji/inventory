import React, { FunctionComponent, useEffect, useState } from "react";
import Tile from "Components/ProductView/Tile/Tile";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { ICar } from "Types/ICar";
import { FavouriteService } from "Services/FavouriteService";
import { IFavourite, colorFavourite } from "Types/IFavourite";

type ProductListProps = {
  productList: Array<ICar>;
};

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

export const ProductList: FunctionComponent<ProductListProps> = ({
  productList,
}) => {
  const classes = useStyles();
  const [favouriteList, setFavouriteList] = useState([] as Array<IFavourite>);
  useEffect(() => {
    // read once time favourite list to pass current list to the product views for changing color icon
    const favourite = new FavouriteService();
    setFavouriteList(favourite.read());
  }, []);
  return (
    <Grid container className={classes.root}>
      {productList.map((product: ICar) => (
        <Tile
          key={product.stockNumber}
          id={product.stockNumber}
          title={product.manufacturerName + " " + product.modelName}
          summary={
            product.mileage?.number +
            " " +
            product.mileage?.unit +
            " - " +
            product.fuelType +
            " - " +
            product.color
          }
          price={0}
          image={product.pictureUrl}
          colorFavourite={
            favouriteList.filter(
              (item) => item.productId === product.stockNumber
            ).length
              ? colorFavourite.secondary
              : colorFavourite.action
          }
        />
      ))}
    </Grid>
  );
};
