import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Card from "../Card";

describe("Card Component rendring test", () => {
  const mockProps = {
    id: 1,
    date: "2021-08-01",
    readingTime: "5 min read",
    title: "How to write a test",
    description: "This is a test description",
    claps: 10,
    liked: false,
    image: "abstract.png",
  };
  it("should render with the increase count", () => {
    const { container } = render(<Card {...mockProps} />);
    const clapButton = screen.getByAltText("clap");
    const text = container.querySelector(".card-clap-count");
    expect(text.innerHTML).toContain("10");
    fireEvent.click(clapButton);
    waitFor(() => {
      expect(text.innerHTML).toContain("11");
    });
  });
  it("should render with the correct heart icon when it is clicked", () => {
    render(<Card {...mockProps} />);
    const heartButton = screen.getByAltText("heart");
    expect(heartButton.src).toContain("heart-black.svg");
    fireEvent.click(heartButton);
    waitFor(() => {
      expect(heartButton.src).toContain("heart-red.svg");
    });
  });
});
