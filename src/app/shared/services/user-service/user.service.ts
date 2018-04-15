import { USERS } from './../../../mock-users';
import { User } from './../../../user';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  private usersUrl = 'api/users';
  constructor(private _http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.usersUrl);
  }

  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this._http.get<User>(url);
  }

  updateUser(user: User): Observable<any> {
    return this._http.put(this.usersUrl, user, httpOptions);
  }

  addUser(user: User): Observable<User> {
    return this._http.post<User>(this.usersUrl, user, httpOptions);
  }
}
