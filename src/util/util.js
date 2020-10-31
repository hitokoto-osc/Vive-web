import { useContext } from 'react';
import { ProviderCtx } from './context';

export function setCache(key, data) {
  try {
    window.localStorage.setItem(
      key,
      data instanceof Object ? JSON.stringify(data) : data,
    );
  } catch (error) {
    //
  }
}

export function getCache(key) {
  const str = window.localStorage.getItem(key);
  if (str) {
    try {
      return JSON.parse(str);
    } catch (error) {
      return str;
    }
  }
  return null;
}

export function getValueByRef(ref) {
  if (!ref || !ref.current) return null;
  return ref.current.getData();
}

export function setTheme(classnames, styles) {
  const { theme = 'dark' } = useContext(ProviderCtx);
  return `${classnames} ${styles[theme]}`;
}
