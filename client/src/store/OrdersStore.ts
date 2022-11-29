import { makeAutoObservable } from "mobx";
import { fetchOrdersKeys } from "../http/orderApi";

export enum Statuses {
  NotPayed = "NotPayed",
  InProccess = "InProccess",
  Success = "Success",
}

export default class OrdersStore {
  private _userOrders: fetchOrdersKeys[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  setUserOrders(userOrders: fetchOrdersKeys[]) {
    this._userOrders = userOrders;
  }
  get userOrders() {
    return this._userOrders;
  }
}
