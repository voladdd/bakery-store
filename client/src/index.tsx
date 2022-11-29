import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserStore from "./store/UserStore";
import reportWebVitals from "./reportWebVitals";
import ProductStore from "./store/ProductStore";
import CartStore from "./store/CartStore";

interface IContext {
  user: UserStore | null;
  product: ProductStore | null;
  cart: CartStore | null;
}

export const Context = createContext<IContext>({
  user: null,
  product: null,
  cart: null,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Context.Provider
      value={{
        user: new UserStore(),
        product: new ProductStore(),
        cart: new CartStore(),
      }}
    >
      <App />
    </Context.Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
