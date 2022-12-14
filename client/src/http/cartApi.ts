import { $authHost } from ".";
import { IProducts } from "../store/ProductStore";

export interface fetchCart {
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

export const deleteProductFromCart = async (id: number): Promise<any> => {
  const response = await $authHost.delete(`/products/${id}/cart`);
  return response;
};

export const patchProductQuantity = async (
  id: number,
  quantity: number
): Promise<any> => {
  const response = await $authHost.patch(`/products/${id}/cart`, {
    quantity,
  });
  return response;
};
