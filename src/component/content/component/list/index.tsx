import React, { memo } from "react";
import { getCache, setTheme } from "@/util/util";
import { replaceEmoji } from "../preview/util";
import showdown from "showdown";

import styles from "./index.less";

const converter = new showdown.Converter();

export const List: React.FC<any> = memo(() => {
  const data = getCache<IViveData[]>("vive-list") || [];
  return (
    <div className={setTheme(styles.list, styles)}>
      {data.map(({ name, site, comment, email }) => (
        <div key={name + site + email} className={styles.listItem}>
          <div className={styles.info}>
            <div className={styles.avatar} />
            <div className={styles.name}>{name}</div>
          </div>
          <div
            className={styles.comment}
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(replaceEmoji(comment)),
            }}
          ></div>
          <div className={styles.line} />
        </div>
      ))}
    </div>
  );
});
