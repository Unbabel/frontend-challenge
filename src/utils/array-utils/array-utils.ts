import { ITranscription } from '@/store/types';

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
): ITranscription[] {
  return Object.values(
    updatingArray.concat(originalArray).reduce((r: any, o: any) => {
      r[o.id] = o;
      return r;
    }, {})
  );
}

/**
 * Checks if passed array has objects with empty fields
 *
 * @export
 * @param {ITranscription[]} array
 * @returns true/false if an object in the array has or not empty fields
 */
export function listHasInvalidFields(array: ITranscription[]) {
  return array.filter((element) =>
    Object.values(element).some((x) => x === null || x === '')
  ).length
    ? true
    : false;
}
