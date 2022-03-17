import fetchMock from "fetch-mock";
import { CONSTANTS } from "@/utils/constants";
import { getDefaultState } from "@/utils/helpers";
import store from "..";
import { List } from "../types";

const MOCK_DATA: List = [
  { id: 1, text: "test", voice: "test" },
  { id: 2, text: "test 2", voice: "test 2" },
];

fetchMock.config.overwriteRoutes = true;
fetchMock.mock(CONSTANTS.API.GET_LIST, { body: MOCK_DATA });

describe("Store", () => {
  beforeEach(() => {
    store.replaceState(getDefaultState());
  });

  describe("Actions & Mutations", () => {
    test("Fetching data", async () => {
      expect(store.getters.isFetching).toBe(false);
      await store.dispatch(CONSTANTS.STORE.ACTIONS.FETCH_DATA);
      expect(store.getters.isFetching).toBe(false);
    });

    test("Fetch data", async () => {
      expect(store.getters.isFetched).toBe(false);
      await store.dispatch(CONSTANTS.STORE.ACTIONS.FETCH_DATA);
      expect(store.getters.isFetched).toBe(true);
    });

    test("Fetch data after added 1 item", async () => {
      store.dispatch(CONSTANTS.STORE.ACTIONS.ADD_ITEM);
      expect(store.getters.list.length).toBe(1);
      expect(store.getters.isFetched).toBe(false);

      await store.dispatch(CONSTANTS.STORE.ACTIONS.FETCH_DATA);
      expect(store.getters.isFetched).toBe(true);
      expect(store.getters.list.length).toBe(3);
    });

    test("Post data to the server", async () => {
      store.dispatch(CONSTANTS.STORE.ACTIONS.ADD_ITEM);
      expect(store.getters.list.length).toBe(1);

      await store.dispatch(CONSTANTS.STORE.ACTIONS.SEND_DATA, MOCK_DATA);
      expect(store.getters.list.length).toBe(1);
    });

    describe("Set data", () => {
      test("from remote server", async () => {
        expect(store.getters.list.length).toBe(0);
        await store.dispatch(CONSTANTS.STORE.ACTIONS.FETCH_DATA);
        expect(store.getters.list.length).toBe(2);
      });

      test("from user input", async () => {
        expect(store.getters.list.length).toBe(0);
        store.dispatch(CONSTANTS.STORE.ACTIONS.ADD_ITEM);
        expect(store.getters.list.length).toBe(1);
      });

      test("after manual add", async () => {
        store.dispatch(CONSTANTS.STORE.ACTIONS.ADD_ITEM);
        expect(store.getters.list.length).toBe(1);

        await store.dispatch(CONSTANTS.STORE.ACTIONS.FETCH_DATA);
        expect(store.getters.list.length).toBe(3);
      });

      test("reset data fetching again from server", async () => {
        expect(store.getters.isFetched).toBe(false);
        await store.dispatch(CONSTANTS.STORE.ACTIONS.FETCH_DATA);
        store.dispatch(CONSTANTS.STORE.ACTIONS.ADD_ITEM);
        expect(store.getters.list.length).toBe(3);
        expect(store.getters.isFetched).toBe(true);

        await store.dispatch(CONSTANTS.STORE.ACTIONS.FETCH_DATA);
        expect(store.getters.list.length).toBe(2);
      });
    });

    describe("Manage data", () => {
      test("Add item", () => {
        expect(store.getters.list.length).toBe(0);
        store.dispatch(CONSTANTS.STORE.ACTIONS.ADD_ITEM);
        expect(store.getters.list.length).toBe(1);
      });

      test("Remove item", () => {
        expect(store.getters.list.length).toBe(0);
        store.dispatch(CONSTANTS.STORE.ACTIONS.ADD_ITEM);
        expect(store.getters.list.length).toBe(1);

        store.dispatch(
          CONSTANTS.STORE.ACTIONS.REMOVE_ITEM,
          store.getters.list[0].id
        );
        expect(store.getters.list.length).toBe(0);
      });

      test("Update item", () => {
        store.dispatch(CONSTANTS.STORE.ACTIONS.ADD_ITEM);
        const id = store.getters.list[0].id;
        const value = "test";
        expect(store.getters.list[0].text).toBe("");
        store.dispatch(CONSTANTS.STORE.ACTIONS.UPDATE_ITEM, {
          id,
          type: "text",
          value,
        });
        expect(store.getters.list[0].text).toBe(value);
      });
    });
  });

  describe("Getters", () => {
    test("isFetched", () => {
      expect(store.getters.isFetched).toBe(false);
    });

    test("isFetching", () => {
      expect(store.getters.isFetching).toBe(false);
    });

    test("list", () => {
      expect(store.getters.list).toBeDefined;
      console.log(store.getters.list);
      expect(store.getters.list.length).toEqual(0);
    });
  });
});
