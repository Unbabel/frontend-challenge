import "jest";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/vue";
import HomeView from "@/views/HomeView.vue";

describe("HomeView component", () => {
  beforeEach(() => {
    render(HomeView);
  });

  it("should add an item to the page", () => {
    const btn = screen.getByAltText("Add new item");
    fireEvent.click(btn);
    waitFor(() => {
      const input = screen.getAllByRole("input");
      expect(input.length).toBe(1);
    });
  });

  it("should delete an item of the page", () => {
    const addBtn = screen.getByAltText("Add new item");
    fireEvent.click(addBtn);

    waitFor(() => {
      const input = screen.getAllByRole("input");
      expect(input.length).toBe(1);

      const deleteBtn = screen.getByLabelText("Delete");
      fireEvent.click(deleteBtn);

      waitFor(() => {
        const input = screen.queryAllByRole("input");
        expect(input.length).toBe(0);
      });
    });
  });
});
