import "jest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";
import CustomButton from "@/components/CustomButton.vue";

describe("CustomButton component", () => {
  beforeEach(() => {
    render(CustomButton, {
      props: {
        label: "test",
        icon: "delete.svg",
      },
    });
  });

  it("should have the label as the text of the button", () => {
    const btn = screen.getByText("test");
    expect(btn).toBeInTheDocument();
  });

  it("should have the alt text as the text of the label prop", () => {
    const btn = screen.getByAltText("test");
    expect(btn).toBeInTheDocument();
  });
});
