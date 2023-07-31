import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  register(
    email: string,
    userName: string,
    password: string,
    _id: string
  ) {
    return this.http.post(
      'https://vacation-nation-users-default-rtdb.firebaseio.com/.json',
      { email, userName, password, _id }
    );
  };

  login(
    email: string,
    password: string,
  ) {
    let isLogged: boolean = false
    return isLogged = true
  }

  getAllUsers() {

  }
}
