import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _loggedIn = false;
  public loggedIn$ = new BehaviorSubject(this._loggedIn);

  constructor() {}

  doLogin(minitoken: string): Observable<{ code: number }> {
    console.log(minitoken);
    return of({
      code: 201,
    });
  }
}
