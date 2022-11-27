import { makeAutoObservable } from "mobx";

export default class UserStore {
  private _isAuth: boolean = true;
  private _user: {} = {};
  constructor() {
    makeAutoObservable(this);
  }

  setIsAuth(bool: boolean) {
    this._isAuth = bool;
  }

  setUser(user: {}) {
    this._user = user;
  }

  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
}
