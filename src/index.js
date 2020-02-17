
/**
 * Adds numbers together
 */
export function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0)
}
