/**
 * An alias to `on dom ready`, the window `DOMContentLoaded` event.
 * @param fn the function that should execute
 */
export function ready(fn: () => void) {
  window.addEventListener("DOMContentLoaded", fn);
}
