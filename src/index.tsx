import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import Exception from "pages/exception/index";
import * as React from "react";
import "react-app-polyfill/stable";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "src/redux/store";
// import routes from "src/router/routes";
import { pathToRegexp } from "path-to-regexp";
import "src/styles/index";
import { getToken, getStore } from "utils/auth";
import App from "./App";

import "./mock";

NProgress.configure({ showSpinner: false });
NProgress.start();
// 查看是否有token
beforeRender()
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("root") as HTMLElement
    );
  })
  .catch(() => {
    ReactDOM.render(
      <Exception title="" desc="服务器出了点小差错，请等会再来" />,
      document.getElementById("root") as HTMLElement
    );
  })
  .finally(() => {
    NProgress.done();
  });

// mock user info

// render之前需要做的异步请求：获取配置信息、获取用户信息、生成菜单
async function beforeRender() {
  let isLogin = false;
  let userInfo = null;
  if (pathToRegexp(location.pathname).test("/login/")) {
    return;
  }
  if (getToken() && getStore("userInfo")) {
    isLogin = true;
    const info = getStore("userInfo") || null;
    userInfo = info;
  } else {
    return;
  }
  return;
}
