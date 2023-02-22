import React from "react";
import { render } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Header", () => {
  it("should render when component is mounted", () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
