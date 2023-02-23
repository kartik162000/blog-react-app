import { screen, render, waitFor } from "@testing-library/react";
import MainBody from "../MainBody";
import makeRequest from "../../../utils/makeRequest";
jest.mock("../../../utils/makeRequest");

describe("MainBody", () => {
  it("should show loading when data is loaded", async () => {
    makeRequest.mockResolvedValue([
      {
        id: 1,
        title: "title",
        description: "description",
        image: "https://i.ibb.co/V38cHQ3/young-painters.png",
        readingTime: "2mins",
        liked: false,
        claps: 0,
      },
    ]);
    render(<MainBody />);
    await waitFor(() => {
      expect(screen.getAllByTestId("blog-post")).toHaveLength(1);
    });
  });
  it("should show error when data is not loaded", async () => {
    makeRequest.mockRejectedValue({ message: "error" });
    render(<MainBody />);
    await waitFor(() => {
      expect(screen.getByText("error")).toBeTruthy();
    });
  });
});
