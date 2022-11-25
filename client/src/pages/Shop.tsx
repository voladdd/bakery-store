import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../components/CategoriesBar";
import ProductsList from "../components/ProductsList";

const Shop = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <CategoriesBar />
        </Col>
        <Col md={9}>
          <ProductsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
