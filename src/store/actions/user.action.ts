import { USER_LOGGED_IN } from "../constants";
import userService from "../services/user.service";
const login =
  (values: any, navigate: Function) => async (dispatch: Function) => {
    const result = await userService.login(values);
    dispatch(result);
    if (result.type === USER_LOGGED_IN) {
      setTimeout(() => {

        navigate()
      }, 1)
    }
  };
const setUser = () => (dispatch: Function) => {
  const result = userService.setUser();
  dispatch(result);
};
const logout = () => async (dispatch: Function) => {
  const result = userService.logout();
  dispatch(result);

};

export { login, logout, setUser };
