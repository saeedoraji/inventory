import React, { FunctionComponent } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { Location, Link } from "@reach/router";
import Typography from "@material-ui/core/Typography";
import { ProductViewProps } from "../Shared/ProductViewProps";
import { AddFavourite } from "Components/ProductList/AddFavourite";
import { cssCommonVars } from "cssCommonVars";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    border: `1px solid ${cssCommonVars.borderColors}`,
    padding: theme.spacing(1.5),
    margin: theme.spacing(1, 0),
  },
  media: {
    height: 96,
    width: 128,
    backgroundSize: "contain",
    position: "relative",
  },
  favourite: {
    position: "absolute",
    top: -20,
    right: -12,
    zIndex: 1,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  content: {
    flex: "1 0 auto",
    padding: "0 !important",
    marginLeft: theme.spacing(3),
  },
  summary: {
    marginBottom: theme.spacing(1.5),
  },
  detailButton: {
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  shimmer: {
    marginBottom: theme.spacing(2),
  },
}));

const Tile: FunctionComponent<ProductViewProps> = ({
  id,
  title,
  image,
  summary,
  colorFavourite,
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} role="gridcell">
      <Card className={classes.root} elevation={0}>
        {id ? (
          <CardMedia className={classes.media} image={image} title={title}>
            <div className={classes.favourite}>
              <Location>
                {({ location }) => (
                  <AddFavourite
                    data-testid="favourite-button"
                    productId={id}
                    color={colorFavourite}
                    title={title}
                    summary={summary}
                    image={image}
                    location={location}
                  />
                )}
              </Location>
            </div>
          </CardMedia>
        ) : (
          <Skeleton animation="wave" variant="rect" className={classes.media} />
        )}
        <div className={classes.details}>
          <CardContent className={classes.content}>
            {id ? (
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
            ) : (
              <Skeleton
                animation="wave"
                variant="rect"
                width={100}
                height={20}
                className={classes.shimmer}
              />
            )}
            {id ? (
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.summary}
              >
                Stock # {id} - {summary}
              </Typography>
            ) : (
              <Skeleton
                animation="wave"
                variant="rect"
                width={200}
                height={20}
                className={classes.shimmer}
              />
            )}
            {id ? (
              <Typography variant="subtitle2" component="p">
                <Link
                  color="primary"
                  to={`/product-detail/${id}`}
                  className={classes.detailButton}
                >
                  View Detail
                </Link>
              </Typography>
            ) : (
              <Skeleton
                animation="wave"
                variant="rect"
                width={50}
                height={20}
              />
            )}
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
};

export default Tile;
