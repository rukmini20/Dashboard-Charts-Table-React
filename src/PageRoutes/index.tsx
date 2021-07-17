import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, } from "react-router-dom";

import cookies from "react-cookies";
import { unsecuredRoutes, securedRoutes, } from "./routes";
import {RouteI} from '../interfaces'
import { logout, setUser } from "../store/actions/user.action";
import { NotFound } from "../components/pages";
import { HeadAppBar } from "../components/widgets";
const PageRoutes = (props: any) => {

  let [displayedUser, setDisplayedUser] = useState<boolean>(false);
  useEffect(() => {
    if (cookies.load("refresh_token") && cookies.load("access_token")) {
      props.setUser();// eslint-disable-next-line
      displayedUser = true;
    } else {
      props.logout();
      displayedUser = false;
    }
    setDisplayedUser(displayedUser)
    //  eslint-disable-next-line
  }, [cookies.load("refresh_token"), cookies.load("access_token")]);

  return (
    <>
      {displayedUser && <HeadAppBar />}

        <Switch>
          {displayedUser?securedRoutes.map((route: RouteI) => (
            <Route exact key={route.path} path={route.path} component={route.component} />
          )) : unsecuredRoutes.map((route: any) => (
            <Route exact key={route.path} path={route.path} component={route.component} />
              ))}{" "}
          {(!cookies.load("refresh_token") || !cookies.load("access_token")) && <Redirect to={unsecuredRoutes[0].path} />}
            <Route component={NotFound} />

          </Switch>
    </>
  );
};
const mapStateToProps = ({ user }: any) => ({
  type: user.type,
});
export default connect(mapStateToProps, { logout, setUser })(PageRoutes);
