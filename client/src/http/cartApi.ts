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

export interface fetchCartKeys {
  product: IProducts;
  quantity: number;
}

export const fetchUserCart = async (): Promise<fetchCartKeys[]> => {
  const { data }: fetchCart = await $authHost.get("/cart");
  return data.products.map(
    (pr) =>
      ({
        product: {
          id: pr.id,
          title: pr.title,
          description: pr.description,
          image: pr.image,
          price: pr.price,
        },
        quantity: pr.CartProducts.quantity,
      } as fetchCartKeys)
  );
};

export const postAddProductToCart = async (id: number): Promise<any> => {
  const response = await $authHost.post(`/products/${id}/cart`);
  return response;
};
