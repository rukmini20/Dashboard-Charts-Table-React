import api from "./api";
import { dashboard } from "../urls";

export const getdashboardAPI = async () => {
  try {
    return await api
      .get(dashboard)
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
