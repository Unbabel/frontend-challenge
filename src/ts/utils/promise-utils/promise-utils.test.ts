import * as promiseUtils from "./promise-utils";

describe("Test promise utils", () => {
  const testPromise = new Promise(resolve => {
    setTimeout(() => {
      resolve("Promise Resolved");
    }, 300);
  });

  const testPromiseReject = new Promise(reject => {
    setTimeout(() => {
      reject("Promise Rejected");
    }, 300);
  });

  test("run resolves with success", () => {
    promiseUtils.run(testPromise).then(data => {
      expect(data).toBe("Promise Resolved");
    });
  });

  test("run fails with an error", () => {
    promiseUtils
      .run(testPromiseReject)
      .catch((e: any) => expect(e).toMatch("error"));
  });
});
