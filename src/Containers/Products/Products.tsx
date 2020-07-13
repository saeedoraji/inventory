import React, { FunctionComponent, useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import { ProductList } from "Components/ProductList";
import { ICar } from "Types/ICar";
import { useApp } from "State/AppContext";
import { useStyles } from "./styles";
import { useAsync } from "react-use";
import { getProductList } from "./ProductListService";

export const Products: FunctionComponent = () => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const [sharedState] = useApp() as any;
  const state = useAsync(
    async () => await getProductList(currentPage, "asc", sharedState),
    [currentPage, sharedState]
  );
  const handleChangePage = (_: any, currentPage: number) => {
    setCurrentPage(currentPage);
  };

  useEffect(() => {
    if (currentPage > 1) {
      setCurrentPage(1);
    }
  }, [sharedState]);
  return (
    <>
      <Paper className={classes.filteredBox}>
        <div className={classes.pagination}>
          <Pagination
            count={state?.value?.totalPageCount}
            variant="outlined"
            shape="rounded"
            page={currentPage}
            onChange={handleChangePage}
          />
        </div>
        <Typography component="h3">
          Result: {state?.value?.totalCarsCount}
        </Typography>
      </Paper>
      <Paper>
        {!state?.loading ? (
          <ProductList productList={state?.value?.cars as Array<ICar>} />
        ) : (
          <Typography component="h1">Loading products ...</Typography>
        )}
      </Paper>
    </>
  );
};
