import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Container, ListGroup, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import { getOrders } from "../http/orderApi";
import { ORDERS_ROUTE } from "../utils/consts";

const Orders = observer(() => {
  const { user, orders } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    getOrders().then((data) => {
      orders?.setUserOrders(data);
      console.log(data);
    });
    user?.setCurrentRoute(ORDERS_ROUTE);
  }, []);

  return (
    <Container>
      <h2 className="mt-2">Ваши заказы</h2>
      <ListGroup as="ol">
        {orders?.userOrders.map((ordr) => (
          <ListGroup.Item
            key={ordr.id}
            as="li"
            className="d-flex justify-content-between align-items-start"
            action
            onClick={() => {
              navigate(ORDERS_ROUTE + "/" + ordr.id);
            }}
            style={{ cursor: "pointer" }}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">ЗАКАЗ #{ordr.id}</div>
              Комментарий к заказу: {ordr.comment}
            </div>
            <Badge bg="secondary" pill>
              {ordr.status}
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
});

export default Orders;
