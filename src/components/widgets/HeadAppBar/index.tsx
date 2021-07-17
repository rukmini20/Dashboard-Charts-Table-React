import { useRef } from "react";
import { connect } from "react-redux";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import SideDrawer from "../SideDrawer";
import styles from "./index.module.scss";
import { logout } from "../../../store/actions/user.action";
const HeadAppBar = (props: any) => {
  const sideDrawerRef = useRef<any>();
  const handleLogout = () => {
    props.logout();
  };
  return (
    <>
      <SideDrawer ref={sideDrawerRef} handleLogout={handleLogout} />
      <div className={styles.headAppBarbackground}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={() => sideDrawerRef.current?.toggle()}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Halloween App</Typography>

          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};
const mapStateToProps = () => ({});
export default connect(mapStateToProps, { logout })(HeadAppBar);
