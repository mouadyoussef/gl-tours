import { User } from "./../models/user.model";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface AuthResponse {
  access_token: string;
  expires_at: Date;
  token_type: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _userIsAuthenticated = false;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthResponse> {
    console.log("Starting AJAX");

    return this.http.post<AuthResponse>("http://127.0.0.1:8000/api/login", { email, password });
    this._userIsAuthenticated = true;
  }

  signup(name: string, email: string, password: string) {
    return this.http.post(`${environment.apiUrl}register`, { name, email, password });
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
