import React, { ReactElement } from "react";
import type { IConfig } from "./interface";
import { ProviderCtx } from "./util/context";
import ReactDOM from "react-dom/client";
import { ViveComponent } from "./component/vive";

export default class Vive {
  private config: IConfig;
  private container: Element | null;

  constructor(cfg: IConfig) {
    this.config = cfg;
    this.container = null;
    this.init();
  }

  public init() {
    if (!this.config.container) {
      throw new Error("vive 容器 参数必填，id 或 class");
    }
    if (typeof this.config.container === "string") {
      this.container = document.querySelector(this.config.container);
    } else {
      this.container = this.config.container;
    }
    if (!this.container) {
      throw new Error("vive 容器 不存在");
    }

    try {
      const { container, ...props } = this.config;
      const Container = ReactDOM.createRoot(this.container);
      Container.render(
        <ProviderCtx.Provider value={props}>
          <ViveComponent />
        </ProviderCtx.Provider>
      );
    } catch (error) {
      console && console.error("Vive-init-error", error);
    }
  }
}
