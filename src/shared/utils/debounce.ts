// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<F extends (...args: any[]) => any>(
  func: F,
  ms: number
): (...args: Parameters<F>) => Promise<ReturnType<F>> {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<F>) => {
    if (timer) {
      clearTimeout(timer);
    }
    return new Promise<ReturnType<F>>((resolve) => {
      timer = setTimeout(() => {
        const returnValue = func(...args) as ReturnType<F>;
        resolve(returnValue);
      }, ms);
    });
  };
}
