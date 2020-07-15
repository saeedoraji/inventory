import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { FilterBox } from "Components/FilterList/FilterBox";
import "@testing-library/jest-dom";
import { colors, manufactures } from "./api/mockData";
import { getFilterBoxData } from "Components/FilterList/FilterListService";

jest.mock("../../Components/FilterList/FilterListService");

test("Show a list of colors", async () => {
  getFilterBoxData.mockResolvedValueOnce(colors);
  render(<FilterBox title="colors" onValueSelected={() => {}} />);

  expect(screen.getByText("Loading colors ...")).toBeInTheDocument();
  expect(getFilterBoxData).toHaveBeenCalledTimes(1);
  await waitFor(() =>
    expect(screen.getByTestId(`colors-${colors.length}`)).toBeInTheDocument()
  );
  // colors.forEach((color) =>
  //   expect(screen.getByText(color.title)).toBeInTheDocument()
  // );
});

test("Show a list of manufactures", async () => {
  getFilterBoxData.mockResolvedValueOnce(manufactures);
  render(<FilterBox title="manufactures" onValueSelected={() => {}} />);

  expect(screen.getByText("Loading manufactures ...")).toBeInTheDocument();
  expect(getFilterBoxData).toHaveBeenCalledTimes(2);
  await waitFor(() =>
    expect(
      screen.getByTestId(`manufactures-${manufactures.length}`)
    ).toBeInTheDocument()
  );
  // manufactures.forEach((manufacture) =>
  //   expect(screen.getByText(manufacture.title)).toBeInTheDocument()
  // );
});
