import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
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
        >
          {category.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default CategoriesBar;
