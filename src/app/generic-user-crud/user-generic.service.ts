import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from './resource.service';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserGenericService extends ResourceService<UserModel> {
  constructor(private http: HttpClient) {
    super(http, `https://crudcrud.com/api/0a3a6c1164074d8b8a1d02350690a7fe`); // dummy CRUD API , This structure might be helpful for further assignments
  }
}
