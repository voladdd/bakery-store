import { $authHost, $host } from ".";
import jwtDecode from "jwt-decode";
import { Roles } from "../store/UserStore";

export const registration = async (email: string, password: string) => {
  const { data } = await $host.post("/auth/registration", { email, password });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};
export const login = async (email: string, password: string) => {
  const { data } = await $host.post("/auth/login", { email, password });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const checkRoles = async (): Promise<Roles[]> => {
  const token = localStorage.getItem("token");
  const userRoles: Roles[] = [];
  if (token) {
    const { roles }: any = jwtDecode(token);
    roles.forEach((role: any) => {
      userRoles.push(Roles[role.value as Roles]);
    });
  }
  return userRoles;
};
