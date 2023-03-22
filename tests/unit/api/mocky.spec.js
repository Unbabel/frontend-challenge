const { URL, getMessages, uploadMessages } = require("@/api/mocky");

describe("API functions", () => {
  it("should fetch and return messages", async () => {
    const data = { messages: [{ id: 1, voice: "test", text: "test" }] };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
      })
    );

    const result = await getMessages();

    expect(global.fetch).toHaveBeenCalled();
    expect(result).toEqual(data);
  });

  it("should handle fetch error and return an empty array", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("Error"));

    const result = await getMessages();

    expect(global.fetch).toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  it("should upload messages and return the status code", async () => {
    const messages = { messages: [{ id: 1, voice: "test", text: "test" }] };
    global.fetch = jest.fn().mockResolvedValue({ status: 200 });

    const result = await uploadMessages(messages);

    expect(global.fetch).toHaveBeenCalledWith(URL, {
      method: "POST",
      body: JSON.stringify(messages),
    });
    expect(result).toEqual(200);
  });

  it("should handle fetch error and return the error status code", async () => {
    const messages = { messages: [{ id: 1, voice: "test", text: "test" }] };
    global.fetch = jest.fn().mockResolvedValue({ status: 404 });

    const result = await uploadMessages(messages);

    expect(global.fetch).toHaveBeenCalledWith(URL, {
      method: "POST",
      body: JSON.stringify(messages),
    });
    expect(result).toEqual(404);
  });
});
