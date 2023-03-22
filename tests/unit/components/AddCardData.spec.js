import "jest";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/vue";
import AddCardData from "@/components/AddCardData.vue";

describe("AddCardData component", () => {
  beforeEach(() => {
    render(AddCardData);
  });

  it("should show the card with an image", () => {
    const image = screen.getByAltText("Add new item");
    expect(image).toBeInTheDocument();
  });

  it("should call a function when clicked", () => {
    const image = screen.getByAltText("Add new item");
    fireEvent.click(image);
    waitFor(() => {
      const textarea = screen.getByRole("textarea");
      expect(textarea).toBeInTheDocument();
    });
  });
});
