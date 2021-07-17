import { Home, Login, Orders } from "../components/pages";
import { RouteI } from "../interfaces";
enum routePaths {
  Home = "/",
  Orders = "/orders",
  Login = "/login",
}

const unsecuredRoutes: Array<RouteI> = [
  {
    path: routePaths.Login,
    component: Login,
  },
];
const securedRoutes: Array<RouteI> = [
  {
    path: routePaths.Home,
    component: Home,
  },
  {
    path: routePaths.Orders,
    component: Orders,
  },
];

export { routePaths, unsecuredRoutes, securedRoutes };
