import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from "..";
import { CART_ROUTE, SHOP_ROUTE } from "../utils/consts";

const Cart = observer(() => {
  const { user } = useContext(Context);
  useEffect(() => {
    user?.setCurrentRoute(CART_ROUTE);
  }, []);
  return <div>Cart</div>;
});

export default Cart;
