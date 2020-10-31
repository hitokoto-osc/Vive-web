import React from 'react';
import showdown from 'showdown';

import styles from './index.less';

const converter = new showdown.Converter();

export default ({ value }) => {
  return (
    <div
      className={styles.preview}
      dangerouslySetInnerHTML={{ __html: converter.makeHtml(value || '') }}
    />
  );
};
