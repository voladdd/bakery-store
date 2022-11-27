import { makeAutoObservable } from "mobx";

export enum Roles {
  User,
  Admin,
  Seller,
}

export default class UserStore {
  private _isAuth: boolean = false;
  private _userRole: Roles = Roles.User;
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

  setUserRole(role: Roles) {
    this._userRole = role;
  }

  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
  get userRole() {
    return this._userRole;
  }
}
