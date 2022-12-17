import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Button,
  Toast,
  ToastContainer,
  Placeholder,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { postAddProductToCart } from "../http/cartApi";
import { fetchOneProduct } from "../http/productApi";
import { IProducts } from "../store/ProductStore";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProducts>();
  const [showAlert, setShowAlert] = useState(false);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    fetchOneProduct(Number(id)).then((data) => setProduct(data));
  }, []);

  return (
    <Container className="d-flex justify-content-center">
      {!loaded && (
        <Card border={"light"}>
          <Card.Img
            style={{
              width: "20rem",
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
      {product ? (
        <Card style={!loaded ? { display: "none" } : { width: "40rem" }}>
          <Card.Img
            variant="left"
            onLoad={() => {
              setLoaded(true);
            }}
            src={`${process.env.REACT_APP_API_URL}public/${product.image}`}
          ></Card.Img>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Subtitle>{product.price} руб.</Card.Subtitle>
          </Card.Body>
          <Button
            variant="dark"
            onClick={() => {
              postAddProductToCart(Number(product.id));
              setShowAlert(true);
            }}
          >
            Добавить в корзину
          </Button>
        </Card>
      ) : null}
      {showAlert ? (
        <ToastContainer className="p-3" position="bottom-end">
          <Toast onClose={() => setShowAlert(false)}>
            <Toast.Header>
              <strong className="me-auto">Успешно!</strong>
            </Toast.Header>
            <Toast.Body>{product?.title} теперь в корзине!</Toast.Body>
          </Toast>
        </ToastContainer>
      ) : null}
    </Container>
  );
};

export default ProductPage;
