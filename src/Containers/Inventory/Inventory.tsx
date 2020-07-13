import React, { FunctionComponent } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { FilterList } from "Components/FilterList";
import { Products } from "Containers/Products";
import { RouteComponentProps } from "@reach/router";

export const Inventory: FunctionComponent<RouteComponentProps> = () => {
  return (
    <Grid container spacing={3} style={{ minWidth: "100vw" }}>
      <Grid item xs={12} md={3} lg={3}>
        <aside>
          <Paper>
            <FilterList />
          </Paper>
        </aside>
      </Grid>
      <Grid item xs={12} md={9} lg={9}>
        <Products />
      </Grid>
    </Grid>
  );
};
