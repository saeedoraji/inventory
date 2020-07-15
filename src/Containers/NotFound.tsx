import React, { FunctionComponent } from "react";
import { Typography, Grid } from "@material-ui/core";
import { Link, RouteComponentProps } from "@reach/router";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  notFoundHolder: {
    width: "97vw",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}));

export const NotFound: FunctionComponent<RouteComponentProps> = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.notFoundHolder}>
      <Typography component="h2" variant="h3">
        404 - Not Found
      </Typography>
      <Typography component="p" variant="body1">
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Typography>
        You can always go back to the <Link to="/inventory">homepage</Link>
      </Typography>
    </Grid>
  );
};
