import Loading from "components/loading";
import * as React from "react";
import { IRoutes } from "types/index";

import Index from "pages/index";

const routes: IRoutes[] = [
  {
    title: "首页",
    icon: "appstore",
    exact: true,
    path: "/index",
    component: Index
  }
];

export default routes;
