import { makeAutoObservable } from "mobx";

export default class ProductStore {
  //   private _isAuth: boolean = false;
  //   private _user: {} = {};
  private _types = [];
  constructor() {
    makeAutoObservable(this);
  }

  //   setIsAuth(bool: boolean) {
  //     this._isAuth = bool;
  //   }

  //   setUser(user: {}) {
  //     this._user = user;
  //   }

  //   get isAuth() {
  //     return this._isAuth;
  //   }
  //   get user() {
  //     return this._user;
  //   }
}
