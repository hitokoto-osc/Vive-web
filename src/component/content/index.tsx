import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useContext,
  useRef,
} from "react";
import { ProviderCtx } from "@/util/context";
import { setTheme } from "@/util/util";
import { Preview } from "./component/preview";
import { List } from "./component/list";
import { Emoji } from "./component/emoji";
import { EMOJI_PREFIX } from "./component/emoji/constant";

import styles from "./index.less";

export const Content: React.FC<any> = forwardRef((props, ref) => {
  const [data, setData] = useState<string>();
  // const [viewData, setviewData] = useState();
  const [preview, setVisible] = useState(true);
  const [emojiVisible, setEmojiVisible] = useState(false);
  useImperativeHandle(ref, () => ({ getData: () => data }));
  const { placeholder = "" } = useContext(ProviderCtx);
  const { onSubmit } = props;
  const onAdd = (code: string) => {
    setData(`${data || ""}${EMOJI_PREFIX}${code}${EMOJI_PREFIX}`);
  };

  return (
    <div className={setTheme(styles.content, styles)}>
      <textarea
        value={data}
        onChange={(e) => setData(e.target.value)}
        autoFocus
        placeholder={placeholder}
      />
      <div className={styles.footer}>
        <a className={styles.item} onClick={() => setVisible(!preview)}>
          <i className="iconfont icon-preview" />
        </a>
        <a
          className={styles.item}
          onClick={() => setEmojiVisible(!emojiVisible)}
        >
          <i className="iconfont icon-emoji" />
        </a>
        <a className={styles.item} onClick={onSubmit}>
          <i className="iconfont icon-submit" />
        </a>
      </div>
      {emojiVisible && <Emoji onAdd={onAdd} />}
      {preview && <Preview value={data} />}
      <List />
    </div>
  );
});
