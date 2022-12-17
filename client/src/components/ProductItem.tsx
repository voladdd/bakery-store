import React, { useState } from "react";
import { Card, Col, Image, Placeholder } from "react-bootstrap";
import { IProducts } from "../store/ProductStore";
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "../utils/consts";

type ProductItemProps = {
  product: IProducts;
};

const ProductItem = ({ product }: ProductItemProps) => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <Col md={4} sm={6}>
      {!loaded && (
        <Card border={"light"}>
          <Card.Img
            style={{
              width: "18rem",
              height: "12rem",
              backgroundColor: "lightgrey",
            }}
          />
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={7} />
            </Placeholder>
            <Placeholder as={Card.Subtitle} animation="glow">
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
            </Placeholder>
          </Card.Body>
        </Card>
      )}
      <Card
        style={!loaded ? { display: "none" } : { cursor: "pointer" }}
        border={"light"}
        onClick={() => {
          navigate(PRODUCT_ROUTE + "/" + product.id);
        }}
      >
        <Card.Img
          variant="top"
          onLoad={() => {
            setLoaded(true);
          }}
          src={process.env.REACT_APP_API_URL + "public/" + product.image}
        ></Card.Img>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Subtitle>{product.price} руб.</Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;
