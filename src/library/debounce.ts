/**
 * Basic debounce function.
 *
 * Based on https://gist.github.com/ca0v/73a31f57b397606c9813472f7493a940?permalink_comment_id=4307328#gistcomment-4307328
 * @param func
 * @param waitFor
 * @returns
 */
export function debounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
  func: F,
  waitFor: number
): (...args: Parameters<F>) => void {
  let timeout: number;
  return (...args: Parameters<F>): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
  };
}
