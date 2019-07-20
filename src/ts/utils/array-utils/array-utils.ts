import { ITranscription } from "ts/types/types";

/**
 * Merges two arrays updating the original one
 * with the properties of the second
 *
 * @export
 * @param {ITranscription[]} originalArray
 * @param {ITranscription[]} updatingArray
 * @returns
 */
export function mergeArrays(
  originalArray: ITranscription[],
  updatingArray: ITranscription[]
) {
  return Object.values(
    updatingArray.concat(originalArray).reduce((r, o) => {
      r[o.id] = o;
      return r;
    }, {})
  );
}
