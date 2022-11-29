import { $authHost } from ".";

export interface fetchOrdersKeys {
  id: number;
  status: string;
  comment: string;
}

export const getOrders = async (): Promise<fetchOrdersKeys[]> => {
  const { data } = await $authHost.get(`/orders`);
  return data;
};

export const postCartOrder = async (comment: string = ""): Promise<any> => {
  const response = await $authHost.post(`/cart/order`, {
    comment,
  });
  return response;
};
