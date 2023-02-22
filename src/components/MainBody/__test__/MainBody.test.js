import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import MainBody from "../MainBody";

describe("MainBody Component rendring test", () => {
  it("should render when component is mounted", () => {
    const { container } = render(<MainBody />);
    expect(container).toMatchSnapshot();
  });
});
