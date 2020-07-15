import React, { FunctionComponent, useCallback, useState } from "react";
import { FilterBox } from "./FilterBox";
import { FilterListData } from "Services/Mock";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { cssCommonVars } from "cssCommonVars";
import { Grid, Box } from "@material-ui/core";
import { useApp } from "State/AppContext";

import ButtonCustomized from "Components/CustomizedElements/Button";

const useStyles = makeStyles((theme: Theme) => ({
  filterList: {
    border: `1px solid ${cssCommonVars.borderColors}`,
    height: 300,
    padding: theme.spacing(5),
  },
  filterListItem: {
    display: "flex",
    height: 90,
    justifyContent: "center",
  },
  filterButtonParent: {
    display: "flex",
    justifyContent: "center",
    height: 65,
    alignItems: "center",
  },
  buttonBox: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
  },
  filterButton: {
    width: 128,
    height: 40,
  },
}));

type productFilterType = {
  boxName: string;
  selectedValue: string;
};

export const FilterList: FunctionComponent = () => {
  const classes = useStyles();
  const [, dispatch] = useApp() as any;
  const [filterObject, setFilterObject] = useState(
    [] as Array<productFilterType>
  );
  const onValueSelected = useCallback(
    (title: string, selectedValue: string) => {
      setFilterObject([
        ...filterObject.filter((item) => item.boxName !== title.toLowerCase()),
        {
          boxName: title.toLowerCase(),
          selectedValue: selectedValue === "-1" ? "" : selectedValue,
        },
      ]);
    },
    [filterObject]
  );

  const filter = () => {
    // dispatch to shared state for updating product list
    console.log(filterObject, "before dispatch");
    dispatch({
      type: "SELECTED_FILTER",
      payload: filterObject,
    });
  };
  return (
    <Grid container className={classes.filterList}>
      {FilterListData.map((filter) => (
        <Grid item xs={12} className={classes.filterListItem} key={filter}>
          <FilterBox title={filter} onValueSelected={onValueSelected} />
        </Grid>
      ))}
      <Grid item xs={12} className={classes.filterButtonParent}>
        <Box className={classes.buttonBox}>
          <ButtonCustomized
            color="primary"
            variant="contained"
            className={classes.filterButton}
            onClick={filter}
          >
            Filter
          </ButtonCustomized>
        </Box>
      </Grid>
    </Grid>
  );
};
