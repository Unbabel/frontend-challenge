/**
 * Get the next usable ID on a List
 * @param list
 * @returns {number}
 */
export function getNextId(list) {
  if (list.length && list.length === 0) return 1;

  const idList = list.map(item => item.id);
  const lastId = Math.max(0, idList);

  return lastId + 1;
}
