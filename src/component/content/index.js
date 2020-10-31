import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useContext,
} from 'react';
import Preview from './component/preview';
import List from './component/list';
import { ProviderCtx } from '@/util/context';
import { setTheme } from '@/util/util';
import styles from './index.less';

export default forwardRef((props, ref) => {
  const [data, setData] = useState();
  const [visible, setVisible] = useState(false);
  useImperativeHandle(ref, () => ({ getData: () => data }));
  const { placeholder = '' } = useContext(ProviderCtx);
  const { onSubmit } = props;
  return (
    <div className={setTheme(styles.content, styles)}>
      <textarea
        value={data}
        onChange={(e) => setData(e.target.value)}
        autosize="true"
        autoFocus
        placeholder={placeholder}
      />
      <div className={styles.footer}>
        <a className={styles.item} onClick={() => setVisible(!visible)}>
          <i className="iconfont icon-preview" />
        </a>
        <a className={styles.item}>
          <i className="iconfont icon-emoji" />
        </a>
        <a className={styles.item} onClick={onSubmit}>
          <i className="iconfont icon-submit" />
        </a>
      </div>
      {visible && <Preview value={data} />}
      <List />
    </div>
  );
});
