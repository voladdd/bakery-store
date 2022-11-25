import { makeAutoObservable } from "mobx";

interface ICategories {
  id: number;
  title: string;
  description: string;
}
interface IProducts {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}
export default class ProductStore {
  //   private _isAuth: boolean = false;
  //   private _user: {} = {};
  private _categories = [
    { id: 1, title: "Выпечка", description: "desc" },
    { id: 2, title: "Напитки", description: "desc" },
  ];
  private _products = [
    { id: 1, title: "a", description: "desc", image: "", price: 200 },
    { id: 2, title: "b", description: "desc", image: "", price: 200 },
    { id: 3, title: "c", description: "desc", image: "", price: 200 },
    { id: 4, title: "d", description: "desc", image: "", price: 200 },
    { id: 5, title: "e", description: "desc", image: "", price: 200 },
  ];
  constructor() {
    makeAutoObservable(this);
  }
  setCategories(categories: ICategories[]) {
    this._categories = categories;
  }
  setProducts(products: IProducts[]) {
    this._products = products;
  }

  get categories() {
    return this._categories;
  }
  get products() {
    return this._products;
  }
}
