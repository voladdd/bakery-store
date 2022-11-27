import React, { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
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
    <Container>
      <Card style={{ width: "40rem" }}>
        <Card.Img
          variant="top"
          src={`${process.env.REACT_APP_API_URL}${product?.image}`}
        ></Card.Img>
        <Card.Body>
          <Card.Title>{product?.title}</Card.Title>
          <Card.Text>{product?.description}</Card.Text>
          <Card.Subtitle>{product?.price}</Card.Subtitle>
        </Card.Body>
        <Button variant="primary">Добавить в корзину</Button>
      </Card>
    </Container>
  );
};

export default ProductPage;
