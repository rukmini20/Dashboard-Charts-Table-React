import api from "./api";
import { login } from "../urls";
export const postloginAPI = async (user: any) => {
  try {
    return await api
      .post(login, user)
      .then((response) => {
        return { status: response.status, body: response.data };
      })
      .catch((err) => {
        return { status: err.response.status, body: err.response.data };
      });
  } catch (err) {
    return { status: 500, body: "Failed to connect" };
  }
};
