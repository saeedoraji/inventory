import React, { FunctionComponent } from "react";
import useStyles from "appStyle";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { RouteComponentProps, Link } from "@reach/router";

const App: FunctionComponent<RouteComponentProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
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
            <nav className={classes.menuParent}>
              <ul className={`${classes.menuParent} ${classes.menu}`}>
                <li>
                  <Link to="/inventory">
                    <Typography component="h4" variant="body1" color="inherit">
                      Inventory
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link to="/favourites">Favourites</Link>
                </li>
              </ul>
            </nav>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="xl" className={classes.container}>
            <Grid container>{children}</Grid>
          </Container>
        </main>
      </div>
      <footer className={classes.footer}>&copy; Car shop</footer>
    </>
  );
};

export default App;
