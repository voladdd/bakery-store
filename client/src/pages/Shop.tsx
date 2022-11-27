import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Context } from "..";
import CategoriesBar from "../components/CategoriesBar";
import ProductsList from "../components/ProductsList";
import { fetchCategories, fetchProducts } from "../http/productApi";

const Shop = observer(() => {
  const { product } = useContext(Context);

  useEffect(() => {
    fetchCategories().then((data) => {
      product?.setCategories(data);
    });
    fetchProducts().then((data) => {
      product?.setProducts(data);
    });
  }, []);

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
});

export default Shop;
