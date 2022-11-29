import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Context } from "..";
import CartList from "../components/CartList";
import { fetchUserCart } from "../http/cartApi";
import { postCartOrder } from "../http/orderApi";
import CartStore from "../store/CartStore";
import { CART_ROUTE } from "../utils/consts";

export const CalculateCartPrice = (cart: CartStore) => {
  return cart.products.reduce((p, c) => p + c.product.price * c.quantity, 0);
};

const Cart = observer(() => {
  const { user, cart } = useContext(Context);
  const [price, setPrice] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetchUserCart().then((data) => {
      cart?.setProducts(data);
      setPrice(CalculateCartPrice(cart!));
    });
    user?.setCurrentRoute(CART_ROUTE);
  }, []);

  return (
    <Container>
      {cart!.products.length > 0 ? (
        <>
          <Card>
            <Card.Body>
              <Card.Title>Корзина</Card.Title>
              <Card.Text>Сумма к заказу {price} рублей</Card.Text>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Комментарий к заказу</Form.Label>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder=""
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </Form.Group>
              </Form>
              <Button
                variant="dark"
                onClick={async () => {
                  await postCartOrder(comment);
                  await fetchUserCart().then((data) => {
                    cart?.setProducts(data);
                    setPrice(CalculateCartPrice(cart!));
                  });
                }}
              >
                Оформить заказ
              </Button>
            </Card.Body>
          </Card>
          <CartList setPrice={setPrice} />
        </>
      ) : (
        <Card>
          <Card.Body>
            <Card.Title>
              Корзина пуста... <br /> Закажи сперва чего-нибудь!
            </Card.Title>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
});

export default Cart;
