import { $authHost } from ".";

export const postCartOrder = async (comment: string = ""): Promise<any> => {
  const response = await $authHost.post(`/cart/order`, {
    comment,
  });
  return response;
};
