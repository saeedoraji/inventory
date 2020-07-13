import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProductList } from "Components/ProductList";
import Tile from "Components/ProductView/Tile/Tile";
import { productListMock } from "./api/mockData";
import { ICar } from "Types/ICar";
import { colorFavourite } from "Types/IFavourite";

describe("Show a list of products", () => {
  beforeEach(() => {
    render(<ProductList productList={productListMock as Array<ICar>} />);
  });
  test("Render single product", () => {
    expect(screen.getByText("Volkswagen")).toBeInTheDocument();
  });

  test(`Show ${productListMock.length} products`, () => {
    expect(screen.getAllByRole("gridcell").length).toEqual(
      productListMock.length
    );
  });
});

test("Add to favourite", () => {
  render(
    <Tile
      id={productListMock[0].stockNumber}
      title={productListMock[0].manufacturerName}
      summary={
        productListMock[0].modelName +
        " " +
        productListMock[0].fuelType +
        " " +
        productListMock[0].color
      }
      price={0}
      image={productListMock[0].pictureUrl}
      colorFavourite={colorFavourite.action}
    />
  );
  // just show how we can fire event in test
  fireEvent.click(screen.getByTestId("favourite-icon"));
  expect(screen.getByTestId("favourite-icon")).toBeInTheDocument();
});
