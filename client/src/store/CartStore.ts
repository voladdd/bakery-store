import { makeAutoObservable } from "mobx";
import { fetchCartKeys } from "../http/cartApi";

export default class CartStore {
  private _products: fetchCartKeys[] = [];
  private _price: number = 0;
  constructor() {
    makeAutoObservable(this);
  }
  setProducts(products: fetchCartKeys[]) {
    this._products = products;
  }
  setPrice(price: number) {
    this._price = price;
  }
  get products(): fetchCartKeys[] {
    return this._products;
  }
  get price(): number {
    return this._price;
  }
}
