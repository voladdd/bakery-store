import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Image, Row, Form, Col } from "react-bootstrap";
import { Context } from "..";
import {
  deleteProductFromCart,
  fetchUserCart,
  patchProductQuantity,
} from "../http/cartApi";
import { CalculateCartPrice } from "../pages/Cart";

interface CartListProps {
  setPrice: React.Dispatch<React.SetStateAction<number>>;
}

const CartList = observer(({ setPrice }: CartListProps) => {
  const { cart } = useContext(Context);
  return (
    <Form>
      <Form.Label className="mt-3">Добавленные продукты</Form.Label>
      {cart?.products.map((p) => (
        <Form.Group key={p.product.id} className="mt-3">
          <Row>
            <Image
              style={{ width: "18rem" }}
              src={process.env.REACT_APP_API_URL + "public/" + p.product.image}
            />
            <Col>
              <h2>{p.product.title}</h2>
              <p>{p.product.price} руб.</p>
            </Col>
            <Col>
              <Form.Control
                type="number"
                placeholder={p.quantity.toString()}
                onBlur={async (e) => {
                  if (Number(e.target.value) !== p.quantity) {
                    await patchProductQuantity(
                      p.product.id,
                      Number(e.target.value)
                    );
                    await fetchUserCart().then((data) => {
                      cart?.setProducts(data);
                      const price = CalculateCartPrice(cart!);
                      cart.setPrice(price);
                      setPrice(price);
                    });
                  }
                }}
              />
            </Col>
            <Col className="d-flex justify-content-end">
              <Button
                variant="secondary"
                onClick={async () => {
                  await deleteProductFromCart(p.product.id);
                  cart.setProducts(
                    cart.products.filter((v) => v.product.id !== p.product.id)
                  );
                  await fetchUserCart().then((data) => {
                    cart?.setProducts(data);
                    const price = CalculateCartPrice(cart!);
                    cart.setPrice(price);
                    setPrice(price);
                  });
                }}
              >
                Убрать
              </Button>
            </Col>
          </Row>
        </Form.Group>
      ))}
    </Form>
  );
});

export default CartList;
