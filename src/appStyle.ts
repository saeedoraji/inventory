import { makeStyles, Theme } from "@material-ui/core/styles";
import { cssCommonVars } from "cssCommonVars";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    "& ul": {
      padding: 0,
      margin: 0,
    },
    "& a": {
      textDecoration: "none",
    },
    "& a:hover": {
      textDecoration: "underline",
    },
  },
  appBar: {
    boxShadow: "none !important",
    height: 80,
    borderBottom: `1px solid ${cssCommonVars.borderColors}`,
    "& nav": {
      width: theme.spacing(30),
    },
    backgroundColor: "#fff !important",
  },
  menuParent: {
    display: "flex",
    height: "inherit",
    alignItems: "center",
  },
  menu: {
    listStyle: "none",
    "& li": {
      padding: theme.spacing(0, 2),
    },
    "& li, & a": {
      display: "flex",
      height: "inherit",
      alignItems: "center",
      color: "#000",
    },
  },

  toolbar: {
    paddingRight: theme.spacing(2),
    height: "inherit",
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  footer: {
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTop: `1px solid ${cssCommonVars.borderColors}`,
  },
}));

export default useStyles;
