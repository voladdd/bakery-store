import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Context } from "..";
import CategoriesBar from "../components/CategoriesBar";
import ProductsList from "../components/ProductsList";
import {
  fetchCategories,
  fetchProducts,
  getProductsByCategory,
} from "../http/productApi";
import { SHOP_ROUTE } from "../utils/consts";

const Shop = observer(() => {
  const { product, user } = useContext(Context);

  useEffect(() => {
    getProductsByCategory(5, 1).then((data) => {
      product?.setProducts(data);
    });
    fetchCategories().then((data) => {
      product?.setCategories(data);
    });
    user?.setCurrentRoute(SHOP_ROUTE);
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
