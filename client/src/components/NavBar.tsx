import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { Context } from "..";
import {
  ORDERS_ROUTE,
  ADMIN_ROUTE,
  CART_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
  ABOUT_ROUTE,
} from "../utils/consts";
import { useNavigate } from "react-router-dom";
import { Roles } from "../store/UserStore";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  // const isLogin = location.pathname === LOGIN_ROUTE;

  const logOut = () => {
    user?.setUser({});
    user?.setIsAuth(false);
    localStorage.clear();
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        {/* <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          Bulochka
        </NavLink> */}
        <Navbar.Brand href={SHOP_ROUTE}>
          <img
            src="/logo.svg"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="BREAD logo"
          />
        </Navbar.Brand>
        {user!.isAuth ? (
          <Nav className="ml-auto flex-fill" style={{ color: "white" }}>
            {user?.userRoles.includes(Roles.Admin) ? (
              <Button
                variant={"outline-light"}
                onClick={() => navigate(ADMIN_ROUTE)}
              >
                Панель админа
              </Button>
            ) : null}
            <Navbar.Collapse className="justify-content-evenly">
              <Nav.Link
                href={SHOP_ROUTE}
                active={user?.currentRoute === SHOP_ROUTE}
              >
                Продукты
              </Nav.Link>
              <Nav.Link
                href={ABOUT_ROUTE}
                active={user?.currentRoute === ABOUT_ROUTE}
              >
                Где купить?
              </Nav.Link>
              <Nav.Link
                href={ORDERS_ROUTE}
                active={user?.currentRoute === ORDERS_ROUTE}
                onClick={() => user?.setCurrentRoute(ORDERS_ROUTE)}
              >
                Заказы
              </Nav.Link>
              <Nav.Link
                href={CART_ROUTE}
                active={user?.currentRoute === CART_ROUTE}
              >
                Корзина
              </Nav.Link>
            </Navbar.Collapse>

            <Button variant={"outline-light"} onClick={() => logOut()}>
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Войти
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
