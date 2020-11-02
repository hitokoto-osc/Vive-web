import { EMOJI_MAP } from '../emoji//component/emoji/constant';
import { EMOJI_PREFIX } from '../emoji/constant';
export function replaceEmoji(value) {
  if (!value) return '';
  return replace(value);
}

function replace(str) {
  EMOJI_MAP.forEach(({ code, src }) => {
    const reg = new RegExp(`${EMOJI_PREFIX}${code}${EMOJI_PREFIX}`);
    str = str.replace(eval(`${reg}g`), `<img src="${src.default}"/>`);
  });
  return str;
}
