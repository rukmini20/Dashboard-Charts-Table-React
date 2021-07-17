import { baseURL,refresh } from "../urls";
import axios, { AxiosResponse } from "axios";
import cookies from "react-cookies";
import jwtDecode, { JwtPayload } from "jwt-decode";

const api = axios.create({ baseURL });

const refreshAPI = axios.create({ baseURL });

refreshAPI.interceptors.request.use((config) => {
  const refresh_token = cookies.load("refresh_token")
  if (refresh_token) {
    config.headers.Authorization = `Bearer ${cookies.load("refresh_token")}`;
  }
  return config
})
const refreshToken = async () => {
  try {
    const result:AxiosResponse<any> = await refreshAPI.post(refresh);
    if (result.data?.access_token) {
      cookies.save("access_token", result.data.access_token, {});
      return result.data.access_token
    }
  }
  catch (error) {

  }
  return null
}

api.interceptors.request.use(async (config) => {
  let access_token:any = cookies.load("access_token");
  let decoded: any=null
  let isExpired:boolean = true
  if (access_token) {
    decoded=jwtDecode<JwtPayload>(access_token);
  }
  if (decoded?.exp > new Date().getTime()) {
    isExpired=false
  }
  if (access_token) {
    if (isExpired) {
      access_token=await refreshToken()
    }
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) =>
    error.response.status === 401 ? handleLogout() : Promise.reject(error)
);

const handleLogout = () => {
  cookies.remove("access_token");
  cookies.remove("refresh_token");
  window.location.href = "/login";
};

export default api;
