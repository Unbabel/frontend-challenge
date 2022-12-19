import { describe, expect, it } from 'vitest'
import { getRandomNumber } from '@/utils/getRandomNumber'

describe('getRandomNumber', () => {
  it('should return number', () => {
    expect(typeof getRandomNumber()).toBe('number')
  })

  it('return 10 digits number by default', () => {
    expect(String(getRandomNumber()).length).toBe(10)
  })

  it('return custom digits number', () => {
    expect(String(getRandomNumber(5)).length).toBe(5)
    expect(String(getRandomNumber(20)).length).toBe(20)
    expect(String(getRandomNumber(9)).length).toBe(9)
  })

  it('zero size return zero', () => {
    expect(getRandomNumber(0)).toBe(0)
  })

  it('undefined should work by default', () => {
    expect(String(getRandomNumber(undefined)).length).toBe(10)
  })

  it('bad params', () => {
    expect(getRandomNumber(null)).toBe(NaN)

    expect(getRandomNumber(-100)).toBe(NaN)
  })
})
