import { ITranscription } from "ts/types/types";

/**
 * Checks if passed array has objects with empty fields
 *
 * @export
 * @param {ITranscription[]} array
 * @returns true/false if an object in the array has or not empty fields
 */
export function arrayIsValid(array: ITranscription[]) {
  return array.filter(element =>
    Object.values(element).some(x => x === null || x === "")
  ).length
    ? true
    : false;
}
