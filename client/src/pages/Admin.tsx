import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateCategory from "../components/modals/CreateCategory";
import CreateProduct from "../components/modals/CreateProduct";

const Admin = () => {
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [productVisible, setProductVisible] = useState(false);
  return (
    <Container className="d-flex flex-column">
      <Button
        variant={"outline-dark"}
        className="mt-2"
        onClick={() => setCategoryVisible(true)}
      >
        Добавить категорию
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-2"
        onClick={() => setProductVisible(true)}
      >
        Добавить продукт
      </Button>
      <CreateCategory
        show={categoryVisible}
        onHide={() => setCategoryVisible(false)}
      />
      <CreateProduct
        show={productVisible}
        onHide={() => setProductVisible(false)}
      />
    </Container>
  );
};

export default Admin;
