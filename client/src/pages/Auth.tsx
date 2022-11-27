import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "..";
import { login, registration } from "../http/userApi";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user?.setUser(user);
      user?.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      alert(error);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
          <Form.Control
            className="mt-3"
            placeholder="Введите пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          ></Form.Control>
          <Form.Group className="d-flex flex-row justify-content-between mt-3">
            {isLogin ? (
              <div>
                Нет аккаунта?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Входите!</NavLink>
              </div>
            )}
            <Button variant={"outline-success"} onClick={click}>
              {isLogin ? "Войти" : "Зарегаца"}
            </Button>
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
