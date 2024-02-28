

export function debounce(fn, timeout = 300) {
  let timer;
  return (...args) => {
    clearInterval(timer);
    timer = setTimeout(() => fn(...args), timeout);
  }
}
