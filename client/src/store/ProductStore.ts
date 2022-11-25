import { makeAutoObservable } from "mobx";

interface ICategories {
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
  //   private _isAuth: boolean = false;
  //   private _user: {} = {};
  private _categories = [
    { id: 1, title: "Выпечка", description: "desc" },
    { id: 2, title: "Хлеб", description: "desc" },
    { id: 3, title: "Напитки", description: "desc" },
  ];
  private _products = [
    {
      id: 1,
      title: "a",
      description: "desc",
      image:
        "https://static.onecms.io/wp-content/uploads/sites/19/2011/04/08/chocolate-chip-muffins-ck-2000.jpg",
      price: 200,
    },
    {
      id: 2,
      title: "b",
      description: "desc",
      image:
        "https://static.onecms.io/wp-content/uploads/sites/19/2011/04/08/chocolate-chip-muffins-ck-2000.jpg",
      price: 200,
    },
    {
      id: 3,
      title: "c",
      description: "desc",
      image:
        "https://static.onecms.io/wp-content/uploads/sites/19/2011/04/08/chocolate-chip-muffins-ck-2000.jpg",
      price: 200,
    },
    {
      id: 4,
      title: "d",
      description: "desc",
      image:
        "https://static.onecms.io/wp-content/uploads/sites/19/2011/04/08/chocolate-chip-muffins-ck-2000.jpg",
      price: 200,
    },
    {
      id: 5,
      title: "e",
      description: "desc",
      image:
        "https://static.onecms.io/wp-content/uploads/sites/19/2011/04/08/chocolate-chip-muffins-ck-2000.jpg",
      price: 200,
    },
  ];
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
