import { ITEMS } from './constant';

export function initBasic() {
  const result = {};
  ITEMS.forEach(({ code }) => {
    result[code] = undefined;
  });
  return result;
}
