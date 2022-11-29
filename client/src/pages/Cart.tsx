import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Context } from "..";
import CartList from "../components/CartList";
import { fetchUserCart } from "../http/cartApi";
import { CART_ROUTE, SHOP_ROUTE } from "../utils/consts";

const Cart = observer(() => {
  const { user, cart } = useContext(Context);
  useEffect(() => {
    fetchUserCart().then((data) => {
      cart?.setProducts(data);
    });
    user?.setCurrentRoute(CART_ROUTE);
  }, []);

  return (
    <Container>
      <CartList />
    </Container>
  );
});

export default Cart;
