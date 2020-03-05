import 'core-js/stable'
import 'regenerator-runtime/runtime'


/**
 * Adds numbers together
 */
export function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0)
}


/**
 * Delayed version of above; returns bogus promise for testing Babel
 */
export function sumDelayed(...nums) {
  return new Promise(resolve => {
    setTimeout(() => resolve(sum(...nums)), 1000)
  })
}
