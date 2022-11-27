import { $authHost, $host } from ".";
import jwtDecode from "jwt-decode";

export const registration = async (email: string, password: string) => {
  const { data } = await $host.post("/auth/registration", { email, password });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};
export const login = async (email: string, password: string) => {
  const { data } = await $host.post("/auth/login", { email, password });
  localStorage.setItem("token", data.token);
  console.log(localStorage.getItem("token"));
  return jwtDecode(data.token);
};

export const check = async () => {
  // const { data } = await $authHost.post("/auth/login");
  // localStorage.setItem("token", data.token);
  // return jwtDecode(data.token);
  return true;
};
