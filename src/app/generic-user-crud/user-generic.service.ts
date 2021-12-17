import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from './resource.service';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserGenericService extends ResourceService<UserModel> {
  constructor(http: HttpClient) {
    let httpUrl: string = 'http://localhost:3000/users';
    super(http, httpUrl);
  }
}
