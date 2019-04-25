import { User } from "./../models/user.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _userIsAuthenticated = true;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  constructor() {}

  login() {
    this._userIsAuthenticated = true;
  }

  getUser() {
    return new User(
      1,
      "waikiki@gmail.com",
      "LC WAIKIKI",
      "Shopping, clothes",
      "pass",
      "lcwaikiki.jpg"
    );
  }
  logout() {
    this._userIsAuthenticated = false;
  }
}
