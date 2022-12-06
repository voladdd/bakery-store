import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { fetchOrder, getOrder } from "../http/orderApi";
import { PRODUCT_ROUTE } from "../utils/consts";

const CalculatePrice = (order: fetchOrder["data"]["cart"] | undefined) => {
  if (order) {
    return order.products.reduce(
      (p, c) => p + c.price * c.CartProducts.quantity,
      0
    );
  }
  return 0;
};

const Order = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<fetchOrder["data"]>();
  const [date, setDate] = useState<Date>(new Date());

  const navigate = useNavigate();

  useEffect(() => {
    getOrder(Number(id)).then((data) => {
      setOrder(data.data);
      if (order) {
        setDate(new Date(order.createdAt));
      }
    });
  });
  return (
    <Container className="d-flex justify-content-center">
      <Card className="mb-2">
        <Card.Header>
          <h2>
            Заказ #{order?.id} <Badge bg="secondary">{order?.status}</Badge>
          </h2>
          <p>
            Создан:{" "}
            {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`}
          </p>
        </Card.Header>
        <Card.Body>
          <Card.Title>Продукты: </Card.Title>
        </Card.Body>
        {order?.cart.products.map((pr) => (
          <Card key={pr?.id}>
            <Card.Body>
              <Button
                onClick={() => {
                  navigate(PRODUCT_ROUTE + "/" + pr?.id);
                }}
                variant="light"
                className="mb-2"
              >
                {pr?.title}
              </Button>
              <Card.Text>{pr?.description}</Card.Text>
              <Card.Footer>
                Кол-во: {pr.CartProducts.quantity}
                <br /> Цена: {pr.price} руб.
              </Card.Footer>
            </Card.Body>
          </Card>
        ))}
        <Card.Footer>
          <Card.Text>Итого: {CalculatePrice(order?.cart)} руб.</Card.Text>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Order;
