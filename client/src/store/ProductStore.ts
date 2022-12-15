import { makeAutoObservable } from "mobx";

export interface ICategories {
  id: number;
  title: string;
  description: string;
  count: number;
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
  private _seletedCategory: ICategories = {
    id: 5,
    title: "",
    description: "",
    count: 0,
  };
  constructor() {
    makeAutoObservable(this);
  }
  setCategories(categories: ICategories[]) {
    this._categories = categories.sort((a, b) => b.count - a.count);
    this._seletedCategory.count = categories.filter((c) => c.id === 5)[0].count;
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
