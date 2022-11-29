import { ICart } from "./../store/CartStore";
import jwtDecode from "jwt-decode";
import { $authHost } from ".";
import { ICategories, IProducts } from "../store/ProductStore";

interface fetchCart {
  data: {
    products: [
      {
        id: number;
        title: string;
        description: string;
        image: string;
        price: number;
        CartProducts: {
          quantity: number;
        };
      }
    ];
  };
}

interface fetchCartKeys {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

export const fetchUserCart = async (): Promise<any> => {
  const { data }: fetchCart = await $authHost.get("/cart");
  return data.products.map(
    (pr) =>
      ({
        id: pr.id,
        title: pr.title,
        description: pr.description,
        image: pr.image,
        price: pr.price,
        quantity: pr.CartProducts.quantity,
      } as fetchCartKeys)
  );
};

// export const fetchProducts = async (): Promise<IProducts[]> => {
//   const { data } = await $host.get("/products");
//   return data;
// };
// export const fetchOneProduct = async (id: number): Promise<IProducts> => {
//   const { data } = await $host.get("/products/" + id);
//   return data;
// };
