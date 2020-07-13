import React, { FunctionComponent, useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { CarService } from "Services/CarService";
import { ICar } from "Types/ICar";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

type ProductDetailProps = {
  productId?: number;
  path: string;
};

const useStyles = makeStyles({
  table: {},
  paper: {},
  tableBox: {
    display: "flex",
    height: 38,
    alignItems: "center",
    padding: 10,
    "&:nth-child(odd)": {
      background: "#eee",
    },
  },
  label: {
    width: "50%",
  },
  value: {
    width: "50%",
  },
});

export const ProductDetail: FunctionComponent<ProductDetailProps> = ({
  productId,
}) => {
  const classes = useStyles();
  const [productData, setProductData] = useState({} as ICar);
  const [error, setError] = useState(false);

  const getProduct = async () => {
    try {
      const productInstance = new CarService();
      const product = await productInstance.getOne(productId || 0);
      setProductData(product.car);
    } catch (e) {
      setError(true);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <Grid container spacing={3} style={{ minWidth: "100vw" }}>
      {error ? (
        <Typography component="h1">Error in fetching data ...</Typography>
      ) : (
        <>
          <Grid item xs={12} md={4} lg={5}>
            <Paper>
              <img
                src={productData?.pictureUrl}
                alt={productData?.manufacturerName}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8} lg={7}>
            <Paper className={classes.paper}>
              <Box className={classes.table}>
                <div className={classes.tableBox}>
                  <div className={classes.label}>Stock Number:</div>
                  <div className={classes.value}>
                    {productData?.stockNumber}
                  </div>
                </div>
                <div className={classes.tableBox}>
                  <div className={classes.label}>Manufacturer Name:</div>
                  <div className={classes.value}>
                    {productData?.manufacturerName}
                  </div>
                </div>

                <div className={classes.tableBox}>
                  <div className={classes.label}>Model Name:</div>
                  <div className={classes.value}>{productData?.modelName}</div>
                </div>

                <div className={classes.tableBox}>
                  <div className={classes.label}>Color:</div>
                  <div className={classes.value}>{productData?.color}</div>
                </div>

                <div className={classes.tableBox}>
                  <div className={classes.label}>Mileage Number:</div>
                  <div className={classes.value}>
                    {productData?.mileage?.number}
                  </div>
                </div>

                <div className={classes.tableBox}>
                  <div className={classes.label}>Mileage Unit:</div>
                  <div className={classes.value}>
                    {productData?.mileage?.unit}
                  </div>
                </div>

                <div className={classes.tableBox}>
                  <div className={classes.label}>Fuel Type:</div>
                  <div className={classes.value}>{productData?.fuelType}</div>
                </div>
              </Box>
            </Paper>
          </Grid>
        </>
      )}
    </Grid>
  );
};
