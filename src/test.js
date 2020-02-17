import { sum } from './index'


test(`Adds numbers together`, () => {
  expect(sum(1, 2, 3)).toBe(6)
  expect(sum(5, 5, 5, 6)).toBe(21)
})
