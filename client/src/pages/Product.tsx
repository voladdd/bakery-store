import React from "react";
import { Card, Container, Button } from "react-bootstrap";

const ProductPage = () => {
  return (
    <Container>
      {/* <Card style={{ width: "40rem" }}>
        <Card.Img variant="top" src={product.image}></Card.Img>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Subtitle>{product.price} руб.</Card.Subtitle>
        </Card.Body>
        <Button variant="primary">Добавить в корзину<Button/>
      </Card> */}
      <Card style={{ width: "40rem" }}>
        <Card.Img variant="top" src=""></Card.Img>
        <Card.Body>
          <Card.Title>Title</Card.Title>
          <Card.Text>Description</Card.Text>
          <Card.Subtitle>Price руб.</Card.Subtitle>
        </Card.Body>
        <Button variant="primary">Добавить в корзину</Button>
      </Card>
    </Container>
  );
};

export default ProductPage;
