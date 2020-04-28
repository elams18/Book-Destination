import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import {map} from 'rxjs/operators'


import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User;
  users: User[];
  readonly baseURL = 'http://localhost:3000/users/'
  constructor(private http:HttpClient) { }

  postUser(usr: User){
      return this.http.post(this.baseURL, usr);
  }
}
