import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Cookies from "js-cookie";

export function cn(...inputs) {
   return twMerge(clsx(inputs));
}

export const saveInLocalStorage = (key, value) => {
   localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key) => {
   return localStorage.getItem(key);
};

export const removeFromLocalStorage = (key) => {
   localStorage.removeItem(key);
};

/**
 *
 * @param key string to set or remove from cookies
 * @param value  type string this is value to store or set in cookies
 */
export const saveInCookies = (key, value) => {
   Cookies.set(key, value);
};
export const getFromCookies = (key) => {
   Cookies.get(key);
};
export const removeFromCookies = (key) => {
   Cookies.remove(key);
};
