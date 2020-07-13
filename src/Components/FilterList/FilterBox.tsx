import React, { FunctionComponent, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ClearIcon from "@material-ui/icons/Clear";

import { useApp } from "State/AppContext";
import { Badge } from "@material-ui/core";
import { useStyles } from "./styles";
import { useAsync } from "react-use";
import { getFilterBoxData } from "./FilterListService";

type FilterBoxProps = {
  title: string;
};

export const FilterBox: FunctionComponent<FilterBoxProps> = ({ title }) => {
  const classes = useStyles();
  const [, dispatch] = useApp() as any;
  const [selectedValue, setSelectedValue] = useState("");
  const [isShowClearFilter, setIsShowClearFilter] = useState(false);

  const state: any = useAsync(
    async () =>
      await getFilterBoxData(
        title,
        isShowClearFilter,
        state?.value,
        selectedValue
      ),
    [isShowClearFilter, selectedValue]
  );

  const clearFilter = () => {
    setIsShowClearFilter(false);
    dispatch({
      type: "SELECTED_FILTER",
      payload: { boxName: title.toLowerCase(), selectedValue: "" },
    });
  };

  const handleChange = (value: string) => {
    setIsShowClearFilter(true);
    setSelectedValue(value);
    // dispatch to shared state for updating product list
    dispatch({
      type: "SELECTED_FILTER",
      payload: { boxName: title.toLowerCase(), selectedValue: value },
    });
  };

  return (
    <Box>
      <Box className={classes.boxTitle}>
        <Typography component="h5" variant="h6">
          {title}
        </Typography>
        <Box className={classes.boxTitleAction}>
          <Badge badgeContent={state?.value?.length} color="primary"></Badge>
          {isShowClearFilter ? (
            <ClearIcon
              className={classes.clearFilter}
              color="secondary"
              onClick={clearFilter}
            />
          ) : (
            ""
          )}
        </Box>
      </Box>
      {state?.error ? (
        <Typography>Error in fetching data {state?.error?.message}</Typography>
      ) : (
        <List className={classes.root}>
          <RadioGroup>
            {state?.value?.length ? (
              state.value.map((value: { title: string; checked: boolean }) => {
                return (
                  <ListItem key={value.title} dense button>
                    <ListItemIcon>
                      <FormControlLabel
                        value={value.title}
                        onChange={(e) => handleChange(value.title)}
                        control={<Radio checked={value.checked} role="radio" />}
                        label={value.title}
                      />
                    </ListItemIcon>
                  </ListItem>
                );
              })
            ) : (
              <Typography component="h2">Loading {title} ...</Typography>
            )}
          </RadioGroup>
        </List>
      )}
    </Box>
  );
};
