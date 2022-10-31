import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = "https://localhost:5001/api/"
  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get(`${this.baseUrl}users`)
  }
}
