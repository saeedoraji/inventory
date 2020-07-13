import React, { FunctionComponent } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import useStyle from "appStyle";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { RouteComponentProps } from "@reach/router";
import { Button } from "@material-ui/core";

const App: FunctionComponent<RouteComponentProps> = ({ children }) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      {/* to remove default css */}
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Car Shop
          </Typography>
          <Button variant="contained" color="primary" href="/inventory">
            Product Page
          </Button>
          <Button variant="contained" color="secondary" href="/favourites">
            Favourites
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={3}>
            {children}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default App;
