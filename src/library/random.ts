/**
 * Gets random.
 * @returns
 */
export function random() {
  return Math.random();
}

/**
 * Gets random number in range.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
 *
 * @param min minimum
 * @param max maximum
 * @returns random number in range
 */
export function randomRange(min: number, max: number) {
  return random() * (max - min) + min;
}
