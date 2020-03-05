import 'core-js/stable'
import 'regenerator-runtime/runtime'


/**
 * Adds numbers together (bogus async for testing purposes)
 */
export function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0)
}


/**
 * Delayed version of above; returns promise for testing Babel
 */
export function sumDelayed(...nums) {
  return new Promise(resolve => {
    setTimeout(() => resolve(sum(...nums)), 1000)
  })
}
