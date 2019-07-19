import { ITranscription } from "ts/types/types";

/**
 * Checks if the array has objects with empty fields
 *
 * @export
 * @param {ITranscription[]} array
 * @returns
 */
export function arrayIsValid(array: ITranscription[]) {
  const isArrayValid = array.filter(element =>
    Object.values(element).some(x => x === null || x === "")
  );

  return isArrayValid.length ? true : false;
}
