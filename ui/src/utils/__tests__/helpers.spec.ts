import { createNewListItem, getDefaultState } from "../helpers";

describe("Helpers", () => {
  describe("getDefaultState", () => {
    const state = getDefaultState();

    test("Generates default state", () => {
      expect(state).toBeDefined;
    });

    test("All the properties are created", () => {
      expect(state.fetched).toBe(false);
      expect(state.fetching).toBe(false);
      expect(state.list.length).toEqual(0);
    });
  });

  test("createNewListItem", () => {
    const newItem = createNewListItem();
    expect(newItem).not.toBeNull;
    expect(newItem).toHaveProperty("id");
  });
});
