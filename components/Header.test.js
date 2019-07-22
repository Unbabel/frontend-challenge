import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";
describe("Header component", () => {
  test("render component", () => {
    const { getByText } = render(<Header />);
    expect(getByText(/transcriptions/i)).toBeInTheDocument();
  });
});
