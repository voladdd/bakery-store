import jwtDecode from "jwt-decode";
import { $host } from ".";
import { ICategories, IProducts } from "../store/ProductStore";

export const fetchCategories = async (): Promise<ICategories[]> => {
  const { data } = await $host.get("/categories");
  return data;
};

export const fetchProducts = async (): Promise<IProducts[]> => {
  const { data } = await $host.get("/products");
  return data;
};

export const getProductsByCategory = async (
  id: number,
  page: number
): Promise<IProducts[]> => {
  const { data } = await $host.get(`/products/category/${id}/?page=${page}`);
  return data;
};

export const fetchOneProduct = async (id: number): Promise<IProducts> => {
  const { data } = await $host.get("/products/" + id);
  return data;
};
