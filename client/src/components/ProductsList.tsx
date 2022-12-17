import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Container, Pagination, Row } from "react-bootstrap";
import { Context } from "..";
import { getProductsByCategory } from "../http/productApi";
import ProductItem from "./ProductItem";

const ProductsList = observer(() => {
  const { product, user } = useContext(Context);
  let items = [];
  if (product) {
    for (
      let page = 1;
      page <= product.selectedCategory.count / 10 + 1;
      page++
    ) {
      items.push(
        <Pagination.Item
          key={page}
          active={page === user?.currentPage}
          onClick={() => {
            user?.setCurrentPage(page);
            getProductsByCategory(product.selectedCategory.id, page).then(
              (data) => {
                product?.setProducts(data);
              }
            );
          }}
          style={{ backgroundColor: "#ffffff" }}
        >
          {page}
        </Pagination.Item>
      );
    }
  }
  return (
    <Container>
      <Row className="d-flex flex-row flex-wrap">
        {product
          ? product.products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          : "loading"}
      </Row>
      <Pagination size="sm">{items}</Pagination>
    </Container>
  );
});

export default ProductsList;
