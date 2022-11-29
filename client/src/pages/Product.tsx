import React, { useEffect, useState } from "react";
import { Card, Container, Button, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../http/productApi";
import { IProducts } from "../store/ProductStore";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProducts>();
  useEffect(() => {
    fetchOneProduct(Number(id)).then((data) => setProduct(data));
  }, []);
  return (
    <Container className="d-flex justify-content-center">
      <Card style={{ width: "40rem" }}>
        <Card.Img
          variant="left"
          src={`${process.env.REACT_APP_API_URL}${product?.image}`}
        ></Card.Img>
        <Card.Body>
          <Card.Title>{product?.title}</Card.Title>
          <Card.Text>{product?.description}</Card.Text>
          <Card.Subtitle>{product?.price} руб.</Card.Subtitle>
        </Card.Body>
        <Button variant="dark">Добавить в корзину</Button>
      </Card>
    </Container>
  );
};

export default ProductPage;
