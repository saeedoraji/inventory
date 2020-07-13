import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  boxTitle: {
    padding: theme.spacing(0, 2, 0, 2),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#eee",
    height: 50,
  },
  boxTitleAction: {
    display: "flex",
    alignItems: "center",
    width: 35,
    justifyContent: "space-between",
  },
  clearFilter: {
    cursor: "pointer",
  },
}));
