import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  filteredBox: {
    height: 100,
    padding: theme.spacing(2),
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));
