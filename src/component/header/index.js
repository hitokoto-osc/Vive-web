import React from 'react';
import { setTheme } from '@/util/util';
import styles from './index.less';

export default () => {
  return (
    <div className={setTheme(styles.header, styles)}>
      {/* &copy; */}
      <span className={styles.prefix}>&copy;</span>
      <i className="iconfont icon-v" />
      <i className="iconfont icon-i" />
      <i className="iconfont icon-V1" />
      <i className="iconfont icon-e" />
    </div>
  );
};
