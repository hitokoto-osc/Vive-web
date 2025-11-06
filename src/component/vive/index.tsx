import React, { useRef } from "react";
import { getValueByRef, setCache, getCache } from "@/util/util";
import { Header } from "../header";
import { BasicInfo } from "../basicInfo";
import { Content } from "../content";
import styles from "./index.less";

export const ViveComponent: React.FC<any> = () => {
  const basicRef = useRef<IRef>({ getData() {} });
  const contentRef = useRef<IRef>({ getData() {} });
  const onSubmit = () => {
    const basicInfo = getValueByRef(basicRef);
    const comment = getValueByRef(contentRef);
    const list = getCache<IViveData[]>("vive-list") || [];
    setCache("vive-list", [...list, { ...basicInfo, comment }]);
    window.location.reload();
  };

  return (
    <div className={`${styles.con} vive-wrapper-container`}>
      <Header />
      <div className={styles.content}>
        <BasicInfo ref={basicRef} />
        <Content ref={contentRef} onSubmit={onSubmit} />
      </div>
    </div>
  );
};
