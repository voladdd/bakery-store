import { makeAutoObservable } from "mobx";

export enum Roles {
  User = "User",
  Admin = "Admin",
  Seller = "Seller",
}

export default class UserStore {
  private _isAuth: boolean = false;
  private _userRoles: Roles[] = [];
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

  setUserRoles(roles: Roles[]) {
    console.log(this._userRoles);
    this._userRoles = roles;
  }

  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
  get userRoles() {
    return this._userRoles;
  }
}
