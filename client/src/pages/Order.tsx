import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOrder, getOrder } from "../http/orderApi";

const Order = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<fetchOrder["data"]>();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    getOrder(Number(id)).then((data) => {
      setOrder(data.data);
      if (order) {
        setDate(new Date(order.createdAt));
      }
    });
  }, []);
  return (
    <Container className="d-flex justify-content-center">
      <Card className="mb-2">
        <Card.Header>
          <h2>Заказ #{order?.id}</h2>
          <p>
            Создан:{" "}
            {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
          </p>
        </Card.Header>
        <Card.Body>
          <Card.Title>Продукты: </Card.Title>
        </Card.Body>
        {order?.cart.products.map((pr) => (
          <Card key={pr?.id}>
            <Card.Body>
              <Card.Title>{pr?.title}</Card.Title>
              <Card.Text>{pr?.description}</Card.Text>
              <Card.Footer>
                Кол-во: {pr.CartProducts.quantity}
                <br /> Цена: {pr.price} руб.
              </Card.Footer>
            </Card.Body>
          </Card>
        ))}
      </Card>
    </Container>
  );
};

export default Order;
