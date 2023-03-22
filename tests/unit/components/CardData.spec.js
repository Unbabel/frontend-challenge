import "jest";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/vue";
import CardData from "@/components/CardData.vue";

const item = {
  id: 1,
  voice: "",
  text: "String",
};
const updateMessageVoice = jest.fn();
const updateMessageText = jest.fn();

describe("CardData component", () => {
  beforeEach(() => {
    render(CardData, {
      props: {
        item,
        updateMessageVoice,
        updateMessageText,
      },
    });
  });

  it("should call updateMessageVoice function if the input has changes", () => {
    const input = screen.getByRole("input");
    fireEvent.update(input, "a");
    waitFor(() => {
      expect(updateMessageVoice).toHaveBeenCalledTimes(1);
    });
  });

  it("should call updateMessageText function if the textarea has changes", () => {
    const textarea = screen.getByRole("textarea");
    fireEvent.update(textarea, "a");
    waitFor(() => {
      expect(updateMessageText).toHaveBeenCalledTimes(1);
    });
  });

  it("should delete an item", () => {
    const textarea = screen.getByRole("textarea");
    expect(textarea).toBeInTheDocument();

    const container = screen.getByTestId("container");
    fireEvent.mouseOver(container);

    waitFor(() => {
      const btn = screen.getByRole("button");
      fireEvent.click(btn);
      waitFor(() => {
        expect(textarea).not.toBeInTheDocument();
      });
    });
  });
});
