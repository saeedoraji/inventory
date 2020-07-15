import React, { FunctionComponent } from "react";
import Grid from "@material-ui/core/Grid";
import { FilterList } from "Components/FilterList";
import { Products } from "Containers/Products";
import { RouteComponentProps } from "@reach/router";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  aside: {
    position: "sticky",
    top: 80,
  },
  content: {
    padding: theme.spacing(0, 0, 0, 3),
  },
}));

export const Inventory: FunctionComponent<RouteComponentProps> = () => {
  const classes = useStyles();

  return (
    <Grid container style={{ minWidth: "95vw" }}>
      <Grid item xs={12} md={3} lg={3}>
        <aside className={classes.aside}>
          <FilterList />
        </aside>
      </Grid>
      <Grid item xs={12} md={9} lg={9} className={classes.content}>
        <Products />
      </Grid>
    </Grid>
  );
};
