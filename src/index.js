import React from 'react';
import ReactDom from 'react-dom';
import { ProviderCtx } from '@/util/context';
import ViveComponent from './component/vive';
import ViveError from './lib/error';
import { MAP_ERROR_MSG, THEME } from './lib/constant';

module.exports = class Vive {
  constructor(config) {
    this.config = config;
    this.check();
  }
  check() {
    try {
      if (this.config.theme) {
        if (!THEME.includes(this.config.theme)) {
          const err = `theme should be one of ${THEME.join(',')}`;
          throw new ViveError(4, MAP_ERROR_MSG.THEME_TYPE + err);
        }
      }
      if (!document) {
        throw new ViveError(3, MAP_ERROR_MSG.RUNTIME_ERROR);
      }
      const { container } = this.config;
      const dom = document.querySelector(container);
      if (!container) {
        throw new ViveError(1, MAP_ERROR_MSG.EMPTY_CONTAINER);
      }
      if (!dom) {
        throw new ViveError(2, MAP_ERROR_MSG.UNVALID_DOM);
      }
      this.config.container = dom;
      this.init();
    } catch (error) {
      console && console.error(error);
    }
  }
  init() {
    try {
      const { container, ...props } = this.config;
      ReactDom.render(
        <ProviderCtx.Provider value={props}>
          <ViveComponent props={props} />
        </ProviderCtx.Provider>,
        this.config.container,
      );
    } catch (error) {
      console && console.error('Vive-init-error', error);
    }
  }
};

// console.log('start');
// module.exports = Vive;
// // module.exports = {
// //   exportName: '111',
// // };
// export default () => {};
// module.exports = class A {};
