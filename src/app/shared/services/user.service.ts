import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private apiUrl = 'http://5ac35614852b8c0014ab1519.mockapi.io/api/v1/user';

  constructor(private _http: Http) { }

  getList(): Observable<any[]> {
    return this._http.get(this.apiUrl).map((response: Response) => response.json());
  }

  getSingle(id: any): Observable<any> {
    return this._http.get(`${this.apiUrl}/${id}`).map((response: Response) => response.json());
  }
}
