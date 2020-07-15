import React, { FunctionComponent, useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { ProductList } from "Components/ProductList";
import { ICar } from "Types/ICar";
import { useApp } from "State/AppContext";
import { useStyles } from "./styles";
import { useAsync } from "react-use";
import { getProductList, createProductDataFake } from "./ProductListService";
import { CustomPagination } from "Components/CustomizedElements/Pagination";

export const Products: FunctionComponent = () => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const [sharedState] = useApp() as any;
  const state = useAsync(
    async () => await getProductList(currentPage, "asc", sharedState),
    [currentPage, sharedState]
  );
  const handleChangePage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  useEffect(() => {
    if (currentPage > 1) {
      setCurrentPage(1);
    }
  }, [sharedState]);
  return (
    <>
      <Typography component="h1" variant="h5" style={{ fontWeight: 600 }}>
        Available cars
      </Typography>
      <Typography component="h3" variant="subtitle1">
        Showing&nbsp;
        {state?.value?.totalCarsCount && state?.value?.totalCarsCount < 11
          ? state?.value?.totalCarsCount
          : 10}
        &nbsp;of {state?.value?.totalCarsCount} result
      </Typography>
      {!state?.loading ? (
        <ProductList productList={state?.value?.cars as Array<ICar>} />
      ) : (
        <>
          <ProductList productList={createProductDataFake()} />
        </>
      )}
      <div className={classes.pagination}>
        <CustomPagination
          currentPage={currentPage}
          count={state?.value?.totalPageCount || 0}
          onChangePage={handleChangePage}
        />
      </div>
    </>
  );
};
