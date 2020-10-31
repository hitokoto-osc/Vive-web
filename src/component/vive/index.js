import React, { useRef } from 'react';
import { getValueByRef, setCache, getCache } from '@/util/util';
import Header from '../header';
import BasicInfo from '../basicInfo';
import Content from '../content';
import styles from './index.less';

export default () => {
  const basicRef = useRef();
  const contentRef = useRef();
  const onSubmit = () => {
    const basicInfo = getValueByRef(basicRef);
    const comment = getValueByRef(contentRef);
    console.log('req', {
      ...basicInfo,
      comment,
    });
    const list = getCache('vive-list') || [];
    setCache('vive-list', [...list, { ...basicInfo, comment }]);
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
