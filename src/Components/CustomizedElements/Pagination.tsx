import React, { FunctionComponent } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  pagination: {
    color: theme.palette.primary.main,
  },
  currentPage: {
    color: theme.palette.text.primary,
  },
  paginationWrap: {
    display: "flex",
    listStyle: "none",
    width: 400,
    "& li": {
      width: "17%",
      textAlign: "center",
      cursor: "pointer",
    },
    "& li:nth-child(3)": {
      width: "32%",
      cursor: "default",
    },
  },
  disabled: {
    color: theme.palette.grey[500],
  },
}));

type CustomPaginationType = {
  currentPage: number;
  count: number;
  onChangePage: (currentPage: number) => void;
};

export const CustomPagination: FunctionComponent<CustomPaginationType> = ({
  currentPage,
  count,
  onChangePage,
}) => {
  const classes = useStyles();
  const handlePage = (type: string) => {
    let page = currentPage;
    switch (type) {
      case "first":
        page = 1;

        break;
      case "prev":
        if (page > 1) {
          page = page - 1;
        }

        break;
      case "next":
        if (page < count) {
          page = page + 1;
        }
        break;
      case "last":
        page = count;
        break;
    }
    onChangePage(page);
  };
  return (
    <div className={classes.pagination}>
      <ul className={classes.paginationWrap}>
        <li
          className={`${currentPage === 1 ? classes.disabled : ""}`}
          onClick={() => handlePage("first")}
        >
          First
        </li>
        <li
          className={`${currentPage === 1 ? classes.disabled : ""}`}
          onClick={() => handlePage("prev")}
        >
          Prev
        </li>
        <li className={classes.currentPage}>
          Page {currentPage} of {count}
        </li>
        <li
          className={`${currentPage === count ? classes.disabled : ""}`}
          onClick={() => handlePage("next")}
        >
          Next
        </li>
        <li
          className={`${currentPage === count ? classes.disabled : ""}`}
          onClick={() => handlePage("last")}
        >
          Last
        </li>
      </ul>
    </div>
  );
};
