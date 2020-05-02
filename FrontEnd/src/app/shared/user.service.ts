import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import {map} from 'rxjs/operators'

import { Books } from './user.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User;
  users: User[];
  books: Books[];
  readonly baseURL = 'http://localhost:3000/'

  constructor(private http:HttpClient) {
   }

  postUser(usr: User){
      return this.http.post(this.baseURL+"users/", usr);
  }
  getBook():Observable<Books[]>{
      return this.http.get<Books[]>(this.baseURL+"books/",{responseType: 'json'});
    }
}
