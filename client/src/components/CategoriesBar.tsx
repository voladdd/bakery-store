import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { Context } from "..";

const CategoriesBar = observer(() => {
  const { product } = useContext(Context);
  return (
    <ListGroup>
      {product?.categories.map((category) => (
        <ListGroup.Item
          action
          variant="light"
          style={{ cursor: "pointer" }}
          active={category.id === product.selectedCategory.id}
          onClick={() => product.setSelectedCategory(category)}
          key={category.id}
          className="d-flex justify-content-between"
        >
          {category.title}
          <Badge bg="dark">{category.count}</Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default CategoriesBar;
