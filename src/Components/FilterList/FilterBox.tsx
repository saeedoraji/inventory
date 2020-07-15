import React, { FunctionComponent, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { FormControl, MenuItem } from "@material-ui/core";
import { useAsync } from "react-use";
import { getFilterBoxData } from "./FilterListService";
import SelectCustomized from "Components/CustomizedElements/Select";

type FilterBoxProps = {
  title: string;
  onValueSelected: (title: string, selectedValue: string) => void;
};

export const FilterBox: FunctionComponent<FilterBoxProps> = ({
  title,
  onValueSelected,
}) => {
  const [selectedValue, setSelectedValue] = useState("-1");

  const state: any = useAsync(
    async () => await getFilterBoxData(title, state?.value, selectedValue),
    [selectedValue]
  );

  const filter = (value: string) => {
    onValueSelected(title, value);
    setSelectedValue(value);
  };

  return (
    <>
      {state.loading ? (
        <Typography component="h2">Loading {title} ...</Typography>
      ) : (
        <FormControl variant="outlined" style={{ width: "100%" }}>
          <label style={{ marginBottom: 10 }}>{title}</label>
          <SelectCustomized
            MenuProps={{
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left",
              },
              getContentAnchorEl: null,
            }}
            value={selectedValue}
            onChange={(e: any) => filter(e.target.value)}
          >
            <MenuItem value="-1" selected>
              All {title?.toLowerCase() === "colors" ? "car colors" : title}
            </MenuItem>
            {state?.value?.map((value: { title: string; checked: boolean }) => (
              <MenuItem key={value.title} value={value.title}>
                {value.title}
              </MenuItem>
            ))}
          </SelectCustomized>
        </FormControl>
      )}
    </>
  );
};
