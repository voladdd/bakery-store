import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { IProducts } from "../store/ProductStore";
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "../utils/consts";

type ProductItemProps = {
  product: IProducts;
};

const ProductItem = ({ product }: ProductItemProps) => {
  const navigate = useNavigate();

  return (
    <Col md={3}>
      <Card
        style={{ width: "18rem", cursor: "pointer" }}
        border={"light"}
        onClick={() => {
          navigate(PRODUCT_ROUTE + "/" + product.id);
        }}
      >
        <Card.Img
          variant="top"
          src={process.env.REACT_APP_API_URL + product.image}
        ></Card.Img>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Subtitle>{product.price} руб.</Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;
