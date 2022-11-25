import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "..";
import ProductItem from "./ProductItem";

const ProductsList = observer(() => {
  const { product } = useContext(Context);
  return (
    <Row className="d-flex">
      {product?.products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Row>
  );
});

export default ProductsList;
