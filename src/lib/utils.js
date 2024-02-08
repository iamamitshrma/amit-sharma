import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function debounce(fn, timeout = 300) {
  let timer;
  return (...args) => {
    clearInterval(timer);
    timer = setTimeout(() => fn(...args), timeout);
  }
}
