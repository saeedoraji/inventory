import React, { FunctionComponent, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { ICar } from "Types/ICar";
import Typography from "@material-ui/core/Typography";
import { Location } from "@reach/router";
import { AddFavourite } from "Components/ProductList/AddFavourite";
import { colorFavourite, IFavourite } from "Types/IFavourite";
import { cssCommonVars } from "cssCommonVars";
import { FavouriteService } from "Services/FavouriteService";
import { useAsync } from "react-use";
import { getProduct } from "./ProductDetailService";

type ProductDetailProps = {
  productId?: number;
  path: string;
};

const useStyles = makeStyles({
  imageHolder: {
    display: "flex",
    justifyContent: "center",
  },

  productDetail: {
    paddingLeft: "160px !important",
  },
  favourite: {
    paddingRight: "160px !important",
  },
  favouritHolder: {
    border: `1px solid ${cssCommonVars.borderColors}`,
    padding: "24px 24px 0px 24px",
    display: "flex",
    width: "100%",
    height: 170,
    justifyContent: "flex-end",
    flexWrap: "wrap",
  },
});

export const ProductDetail: FunctionComponent<ProductDetailProps> = ({
  productId,
}) => {
  const classes = useStyles();
  const [favouriteList, setFavouriteList] = useState([] as Array<IFavourite>);
  useEffect(() => {
    // read once time favourite list to pass current list to the product views for changing color icon
    const favourite = new FavouriteService();
    setFavouriteList(favourite.read());
  }, []);

  const product: any = useAsync(async () => getProduct(productId || 0), []);

  let productData: ICar = {
    stockNumber: 0,
    modelName: "",
    manufacturerName: "",
    mileage: {
      number: 0,
      unit: "",
    },
    fuelType: "",
    pictureUrl: "",
    color: "",
  };
  if (!product.loading) {
    productData = product.value.car as ICar;
  }
  const subTitle = `${productData?.mileage?.number}
  ${productData?.mileage?.unit} - ${productData?.fuelType} - ${productData?.color}`;

  return (
    <Grid container style={{ minWidth: "95vw" }}>
      {product.error ? (
        <Typography component="h1">Error in fetching data ...</Typography>
      ) : (
        <>
          <Grid item xs={12} className={classes.imageHolder}>
            <img
              src={productData?.pictureUrl}
              alt={productData?.manufacturerName}
            />
          </Grid>
          <Grid item xs={12} md={8} lg={8} className={classes.productDetail}>
            <Typography component="h1" variant="h4">
              {productData?.manufacturerName} {productData?.modelName}
            </Typography>
            <Typography component="h2" variant="body1">
              Stock # {productData?.stockNumber}&nbsp;-&nbsp;
              {subTitle}
            </Typography>
            <Typography component="p" variant="body1">
              This car is currently available and can be delivered as soon as
              tomorrow morning. Please be aware that delivery times shown in
              this page are not definitive and may change due to bad weather
              conditions.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} lg={4} className={classes.favourite}>
            <div className={classes.favouritHolder}>
              <Typography component="p" variant="body1">
                If you like this car, click the button and save it in your
                collection of favourite items.
              </Typography>
              <Location>
                {({ location }) => (
                  <AddFavourite
                    data-testid="favourite-button"
                    productId={productData?.stockNumber}
                    color={
                      favouriteList?.filter(
                        (item) => item.productId === productData?.stockNumber
                      ).length
                        ? colorFavourite.secondary
                        : colorFavourite.action
                    }
                    title={`${productData?.manufacturerName} ${productData?.modelName}`}
                    summary={subTitle}
                    image={productData?.pictureUrl}
                    view="detail"
                    location={location}
                  />
                )}
              </Location>
            </div>
          </Grid>
        </>
      )}
    </Grid>
  );
};
