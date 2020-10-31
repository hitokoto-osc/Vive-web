import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Input from './component/input';
import { initBasic } from './util';
import { ITEMS } from './constant';

import styles from './index.less';
export default forwardRef((_, ref) => {
  const [data, setData] = useState(initBasic());
  const onChange = (code, value) => {
    setData({
      ...data,
      [code]: value,
    });
  };
  useImperativeHandle(ref, () => ({
    getData: () => data,
  }));
  return (
    <div className={styles.basic}>
      {ITEMS.map(({ code }) => (
        <Input
          code={code}
          key={code}
          value={data[code]}
          onChange={onChange}
          name={code}
        />
      ))}
    </div>
  );
});
