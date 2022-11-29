import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from "..";
import { fetchUserCart } from "../http/cartApi";
import { CART_ROUTE, SHOP_ROUTE } from "../utils/consts";

const Cart = observer(() => {
  const { user } = useContext(Context);
  useEffect(() => {
    fetchUserCart().then((data) => {
      console.log(data);
    });
    user?.setCurrentRoute(CART_ROUTE);
  }, []);
  return <div>Cart</div>;
});

export default Cart;
