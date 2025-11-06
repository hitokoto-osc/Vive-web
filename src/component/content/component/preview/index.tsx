import React from "react";
import { replaceEmoji } from "./util";

import styles from "./index.less";
import showdown from "showdown";

const converter = new showdown.Converter();

export const Preview: React.FC<IPreview> = ({ value }) => {
  return (
    <div
      className={styles.preview}
      dangerouslySetInnerHTML={{
        __html: converter.makeHtml(replaceEmoji(value ?? "") || ""),
      }}
    />
  );
};
