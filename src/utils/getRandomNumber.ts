export function getRandomNumber(size = 10): number {
  if (typeof size !== 'number' || size < 0) {
    return NaN
  }

  return Math.floor(10 ** (size - 1) + Math.random() * 9 * 10 ** (size - 1))
}
