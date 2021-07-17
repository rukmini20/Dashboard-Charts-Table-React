import {
  Dashboard as DashboardIcon,
  ExitToApp as ExitToAppIcon,
  Reorder as ReorderIcon,
} from "@material-ui/icons";
import { routePaths } from "../../../PageRoutes/routes";
import { DrawerI } from "../../../interfaces";
enum path {
  Home = "/",
  Orders = "/orders",
  Login = "/login",
}
console.log('~~~ routePaths: ', routePaths)
const drawerItems: Array<DrawerI> = [
  {
    title: "Dashboard",
    path: path.Home,
    icon: DashboardIcon,
  },
  {
    title: "Orders",
    path: path.Orders,
    icon: ReorderIcon,
  },
  {
    title: "Log out",
    icon: ExitToAppIcon,
  },
];
console.log('~~~ 1st ',drawerItems)
export default drawerItems;
