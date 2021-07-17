import api from "./api";
import { orders } from "../urls";

export const getordersAPI = async (values: string) => {
  try {
    return await api
      .get(`${orders}/${values}`)
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
