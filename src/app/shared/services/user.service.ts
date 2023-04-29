import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../state/users/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.url);
  }
}
