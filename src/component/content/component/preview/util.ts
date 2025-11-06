import { EMOJI_MAP } from "../emoji/component/emoji/constant";
import { EMOJI_PREFIX } from "../emoji/constant";

export function replaceEmoji(value: string) {
  if (!value) return "";
  return replace(value);
}

function replace(str: string) {
  EMOJI_MAP.forEach(({ code, src }) => {
    const reg = new RegExp(`${EMOJI_PREFIX}${code}${EMOJI_PREFIX}`);
    str = str.replace(reg, `<img src="${src}"/>`);
  });
  return str;
}
