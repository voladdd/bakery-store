import { makeAutoObservable } from "mobx";

export enum Roles {
  User = "User",
  Admin = "Admin",
  Seller = "Seller",
}

export default class UserStore {
  private _currentRoute: string = "/shop";
  private _currentPage: number = 1;
  private _isAuth: boolean = false;
  private _userRoles: Roles[] = [];
  private _user: {} = {};
  constructor() {
    makeAutoObservable(this);
  }
  setCurrentRoute(route: string) {
    this._currentRoute = route;
  }
  setIsAuth(bool: boolean) {
    this._isAuth = bool;
  }
  setCurrentPage(page: number) {
    this._currentPage = page;
  }
  setUser(user: {}) {
    this._user = user;
  }
  setUserRoles(roles: Roles[]) {
    this._userRoles = roles;
  }

  get isAuth() {
    return this._isAuth;
  }
  get currentPage() {
    return this._currentPage;
  }
  get user() {
    return this._user;
  }
  get userRoles() {
    return this._userRoles;
  }
  get currentRoute(): string {
    return this._currentRoute;
  }
}
