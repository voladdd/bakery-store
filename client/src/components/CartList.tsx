import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Image, Row, Form, Col } from "react-bootstrap";
import { Context } from "..";

const CartList = observer(() => {
  const { cart } = useContext(Context);
  return (
    <Form>
      <Form.Label className="mt-3">Добавленные продукты</Form.Label>
      {cart?.products.map((p) => (
        <Form.Group key={p.product.id} className="mt-3">
          <Row>
            <Image
              style={{ width: "18rem" }}
              src={process.env.REACT_APP_API_URL + p.product.image}
            />
            <Col>
              <h2>{p.product.title}</h2>
              <p>{p.product.price} руб.</p>
            </Col>
            <Col>
              <Form.Control type="number" placeholder={p.quantity.toString()} />
            </Col>
            <Col className="d-flex justify-content-end">
              <Button variant="secondary">Убрать</Button>
            </Col>
          </Row>
        </Form.Group>
      ))}
    </Form>
  );
});

export default CartList;
