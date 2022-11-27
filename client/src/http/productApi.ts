import jwtDecode from "jwt-decode";
import { $host } from ".";
import { ICategories } from "../store/ProductStore";

export const fetchCategories = async (): Promise<ICategories[]> => {
  const { data } = await $host.get("/categories");
  return data;
};
