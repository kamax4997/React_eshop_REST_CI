import React from "react";
import "@testing-library/jest-dom";
import { RenderResult, render } from "@testing-library/react";
import Productslist from "../components/products/productslist";

let documentBody;

describe("Products List", () => {
  it("should work", () => {
    documentBody = render(<Productslist />);
    expect(documentBody.getByText("Products")).toBeInTheDocument();
  });
});