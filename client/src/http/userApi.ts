import { $authHost, $host } from ".";

export const registration = async (email: string, password: string) => {
  const response = await $host.post("/auth/registration", { email, password });
  return response;
};
export const login = async (email: string, password: string) => {
  const response = await $host.post("/auth/login", { email, password });
  return response;
};
export const check = async () => {
  const response = await $host.post("/auth/registration");
  return response;
};
