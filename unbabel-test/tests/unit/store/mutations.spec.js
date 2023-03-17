import "jest";
import { mutations } from "@/store";

const {
  setMessages,
  addMessage,
  deleteMessage,
  updateMessageVoice,
  updateMessageText,
} = mutations;

describe("Mutations", () => {
  it("should set messages to my state", () => {
    const state = { messages: [] };
    const data = [
      {
        id: 1,
        voice: "test voice",
        text: "test description",
      },
    ];
    setMessages(state, data);
    expect(state.messages.length).toBe(1);
  });

  it("should add a message", () => {
    const state = { messages: [] };
    addMessage(state);
    expect(state.messages.length).toBe(1);
  });

  it("should delete a message", () => {
    const state = {
      messages: [
        {
          id: 1,
          voice: "test voice",
          text: "test description",
        },
      ],
    };
    deleteMessage(state, 1);
    expect(state.messages.length).toBe(0);
  });

  it("should update the voice text of a message", () => {
    const state = {
      messages: [
        {
          id: 1,
          voice: "test voice",
          text: "test description",
        },
      ],
    };
    updateMessageVoice(state, { id: "voice-id-1", value: "another value" });
    expect(state.messages[0].voice).toBe("another value");
  });

  it("should update the description text of a message", () => {
    const state = {
      messages: [
        {
          id: 1,
          voice: "test voice",
          text: "test description",
        },
      ],
    };
    updateMessageText(state, { id: "text-id-1", value: "another value" });
    expect(state.messages[0].text).toBe("another value");
  });
});
