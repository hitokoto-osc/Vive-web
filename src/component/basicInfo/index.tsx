import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from "react";
import { Input } from "./component/input";
import { ITEMS } from "./constant";

import styles from "./index.less";
export const BasicInfo: React.FC<any> = forwardRef<any>((_, ref) => {
  const [data, setData] = useState<TBasicInputState>(() => {
    const result: TBasicInputState = {};
    ITEMS.map((item) => {
      result[item.code] = undefined;
    });
    return result;
  });
  const onChange = useCallback(
    () => (code: string, value: string) => {
      setData({
        ...data,
        [code]: value,
      });
    },
    []
  );

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
