import { IProducts } from "./ProductStore";
import { makeAutoObservable } from "mobx";

export interface ICart {
  products: [
    {
      product: IProducts | null;
      quantity: number | null;
    }
  ];
}

export default class CartStore {
  private _cart: ICart = { products: [{ product: null, quantity: null }] };
  constructor() {
    makeAutoObservable(this);
  }
  setCart(cart: ICart) {
    this._cart = cart;
  }
  get cart(): ICart {
    return this._cart;
  }
}
