import { IProducts } from "./../store/ProductStore";
import { $authHost } from ".";
import { fetchCartKeys } from "./cartApi";

export interface fetchOrdersKeys {
  id: number;
  status: string;
  comment: string;
}

export interface fetchOrder {
  data: {
    id: number;
    status: string;
    comment: string;
    createdAt: string;
    cart: {
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
  };
}

export const getOrders = async (): Promise<fetchOrdersKeys[]> => {
  const { data } = await $authHost.get(`/orders`);
  return data;
};

export const getOrder = async (id: number): Promise<fetchOrder> => {
  const data: fetchOrder = await $authHost.get(`/orders/` + id);
  return data;
};

export const postCartOrder = async (comment: string = ""): Promise<any> => {
  const response = await $authHost.post(`/cart/order`, {
    comment,
  });
  return response;
};
