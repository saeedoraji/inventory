import React, { FunctionComponent, useState, useEffect } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import { FavouriteService } from "Services/FavouriteService";
import { colorFavourite } from "Types/IFavourite";
import { useApp } from "State/AppContext";

type FavouriteProps = {
  productId: number;
  title: string;
  image: string;
  summary: string;
  color: colorFavourite;
  location?: any;
};

export const AddFavourite: FunctionComponent<FavouriteProps> = ({
  productId,
  title,
  image,
  summary,
  color,
  location,
}) => {
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
        type: "FAVROURITE_REMOVED",
      });
    }
  };

  useEffect(() => {
    setInsideColor(color);
  }, [color]);
  return (
    <IconButton
      aria-label="add to favourites"
      title="add to favourites"
      onClick={saveFavourites}
    >
      <FavoriteIcon data-testid="favourite-icon" color={insideColor} />
    </IconButton>
  );
};
