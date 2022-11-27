import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Context } from "../..";

interface CreateProductProps {
  show: boolean | undefined;
  onHide: () => void;
}

const CreateProduct = ({ show, onHide }: CreateProductProps) => {
  const { product } = useContext(Context);
  const [info, setInfo] = useState([]);

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить продукт
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Select>
            {product?.categories.map((category) => (
              <option key={category.id}>{category.title}</option>
            ))}
          </Form.Select>
          <Form.Control className="mt-2" placeholder="Название продукта" />
          <Form.Control className="mt-2" placeholder="Описание" />
          <Form.Control className="mt-2" type="number" placeholder="Цена" />
          <Form.Control className="mt-2" type="file" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateProduct;
