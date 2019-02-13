import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'https://whispering-dawn-76081.herokuapp.com';

  constructor(private http: HttpClient) {}

  login(username, email) {
    const obj = {
      username: { username },
      email: { email }
    };
    console.log(obj);
    console.log(this.uri);
    this.http.post(`${this.uri}/api/users/`, obj)
      .subscribe(res => console.log('Done'));
  }
}
