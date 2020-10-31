import React, { useState } from 'react';
import { setTheme } from '@/util/util';
import styles from './index.less';

export default ({ name, code, onChange, value }) => {
  const [status, setStatus] = useState(false);
  const classname = `${styles.name} ${(value || status) && styles.focus}`;
  return (
    <div className={setTheme(styles.input, styles)} key={code}>
      <input
        onFocus={() => setStatus(true)}
        onBlur={() => setStatus(false)}
        value={value}
        onChange={(e) => onChange(code, e.target.value)}
      />
      <div className={classname}>{name}</div>
    </div>
  );
};
