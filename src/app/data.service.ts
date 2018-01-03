import { User } from './user';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get('/api/users')
    .map((response: Response) => response.json());
  }

  addUser(user: User) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });
    return this._http.post('/api/user', JSON.stringify(user), options)
      .map((response: Response) => response.json());
  }

  updateUser(user: User) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });
    return this._http.put('/api/user/' + user._id, JSON.stringify(user), options)
      .map((response: Response) => response.json());
  }

  deleteUser(user: User) {
    return this._http.delete('/api/user/' + user._id)
    .map((response: Response) => response.json());
  }
}
