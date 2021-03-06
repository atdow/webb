import { match } from "react-router-dom";

// axios 响应自定义内容类型
export interface IResponseData {
  code: number;
  message: string;
  result: any;
}

// 路由项
export interface IRoutes {
  title: string;
  icon?: string;
  path: string;
  exact?: boolean;
  strict?: boolean;
  noSidebar?: boolean;
  component?: any;
  children?: IRoutes[];
}

// 全部路由映射
export interface IRouteMap {
  [propName: string]: IRoutes;
}

// react-router match类型
export type IMatch = match<{}>;

// redux store state
export interface IStoreState {
  isLogin: boolean;
}

// redux action
export interface IReduxAction {
  payload: any;
  type: string;
}
