import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import Seller from "./pages/Seller";
import Shop from "./pages/Shop";
import {
  ADMIN_ROUTE,
  CART_ROUTE,
  LOGIN_ROUTE,
  ORDERS_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
  SELLER_ROUTE,
  SHOP_ROUTE,
} from "./utils/consts";

interface IRoutes {
  path: string;
  Component: () => JSX.Element;
}

export const authRoutes: IRoutes[] = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: SELLER_ROUTE,
    Component: Seller,
  },
  {
    path: CART_ROUTE,
    Component: Cart,
  },
  {
    path: ORDERS_ROUTE,
    Component: Orders,
  },
  {
    path: ORDERS_ROUTE + "/:id",
    Component: Order,
  },
];

export const publicRoutes: IRoutes[] = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: PRODUCT_ROUTE + "/:id",
    Component: Product,
  },
];
