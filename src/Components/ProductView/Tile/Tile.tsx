import React, { FunctionComponent } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { navigate, Location } from "@reach/router";
import Typography from "@material-ui/core/Typography";
import { ProductViewProps } from "../Shared/ProductViewProps";
import { AddFavourite } from "Components/ProductList/AddFavourite";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 140,
    backgroundSize: "contain",
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
    <Grid item xs={12} md={4} lg={3} role="gridcell">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title={title}
            onClick={(e) => navigate(`/product-detail/${id}`)}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {summary}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
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
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Tile;
