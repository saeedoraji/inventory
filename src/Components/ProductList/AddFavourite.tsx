import React, { FunctionComponent, useState, useEffect } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { FavouriteService } from "Services/FavouriteService";
import { colorFavourite } from "Types/IFavourite";
import { useApp } from "State/AppContext";
import ButtonCustomized from "Components/CustomizedElements/Button";

type FavouriteProps = {
  productId: number;
  title: string;
  image: string;
  summary: string;
  color: colorFavourite;
  view?: string;
  location?: any;
};

const useStyles = makeStyles((theme: Theme) => ({
  favouriteButton: {
    width: 128,
    height: 40,
  },
}));

export const AddFavourite: FunctionComponent<FavouriteProps> = ({
  productId,
  title,
  image,
  summary,
  color,
  view = "tile",
  location,
}) => {
  const classes = useStyles();
  const [insideColor, setInsideColor] = useState(color);
  const [, dispatch] = useApp() as any;

  const saveFavourites = (): void => {
    const favourite = new FavouriteService();
    favourite.save({ productId, title, summary, image });
    setInsideColor(
      insideColor === colorFavourite.secondary
        ? colorFavourite.action
        : colorFavourite.secondary
    );
    if (location.pathname === "/favourites") {
      dispatch({
        type: "FAVOURITE_REMOVED",
      });
    }
  };

  useEffect(() => {
    setInsideColor(color);
  }, [color]);
  return (
    <>
      {view === "tile" ? (
        <IconButton
          aria-label="add to favourites"
          title="add to favourites"
          onClick={saveFavourites}
        >
          <FavoriteIcon data-testid="favourite-icon" color={insideColor} />
        </IconButton>
      ) : (
        <ButtonCustomized
          color="primary"
          variant="contained"
          className={classes.favouriteButton}
          onClick={saveFavourites}
        >
          {insideColor === colorFavourite.secondary ? "Saved" : "Save"}
        </ButtonCustomized>
      )}
    </>
  );
};
