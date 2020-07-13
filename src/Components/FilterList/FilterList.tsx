import React, { FunctionComponent, Fragment } from "react";
import { FilterBox } from "./FilterBox";
import { FilterListData } from "Services/Mock";
import { Divider } from "@material-ui/core";

export const FilterList: FunctionComponent = () => {
  return (
    <>
      {FilterListData.map((filter) => (
        <Fragment key={filter}>
          <FilterBox title={filter} />
          <Divider />
        </Fragment>
      ))}
    </>
  );
};
