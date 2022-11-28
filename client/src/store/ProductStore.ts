import { makeAutoObservable } from "mobx";

export interface ICategories {
  id: number;
  title: string;
  description: string;
}
export interface IProducts {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}
export default class ProductStore {
  private _categories: ICategories[] = [];
  private _products: IProducts[] = [];
  private _seletedCategory: ICategories = { id: 0, title: "", description: "" };
  constructor() {
    makeAutoObservable(this);
  }
  setCategories(categories: ICategories[]) {
    this._categories = categories;
  }
  setProducts(products: IProducts[]) {
    this._products = products;
  }
  setSelectedCategory(category: ICategories) {
    this._seletedCategory = category;
  }

  get selectedCategory(): ICategories {
    return this._seletedCategory;
  }
  get categories() {
    return this._categories;
  }
  get products() {
    return this._products;
  }
}
