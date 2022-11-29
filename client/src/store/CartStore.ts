import { IProducts } from "./ProductStore";
import { makeAutoObservable } from "mobx";
import { fetchCartKeys } from "../http/cartApi";

export default class CartStore {
  private _products: fetchCartKeys[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  setProducts(products: fetchCartKeys[]) {
    this._products = products;
  }
  get products(): fetchCartKeys[] {
    return this._products;
  }
}
