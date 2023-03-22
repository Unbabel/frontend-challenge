import "jest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";
import NavigationHeader from "@/components/NavigationHeader.vue";

describe("NavigationHeader component", () => {
  beforeEach(() => {
    render(NavigationHeader);
  });

  it("should show the title of the app", () => {
    const title = screen.getByText("Transcriptions");
    expect(title).toBeInTheDocument();
  });
});
