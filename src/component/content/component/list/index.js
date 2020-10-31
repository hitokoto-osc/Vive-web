import React from 'react';
import { getCache, setTheme } from '@/util/util';
import showdown from 'showdown';

import styles from './index.less';

const converter = new showdown.Converter();

export default () => {
  const data = getCache('vive-list') || [];
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
            dangerouslySetInnerHTML={{ __html: converter.makeHtml(comment) }}
          ></div>
          <div className={styles.line} />
        </div>
      ))}
    </div>
  );
};
