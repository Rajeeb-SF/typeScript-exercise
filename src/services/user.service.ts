import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { User, userTypes } from 'src/app/Interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: Array<User> = [
    {
      firstName: 'Joseph',
      middleName: 'Guthrie',
      lastName: 'Sam',
      address: 'abc street',
      role: userTypes.subscriber,
      phoneNumber: '+91849394839',
      email: 'abc@example.com',
      createdAt: moment().format('YYYY-MM-DD'),
      updatedAt: moment().format('YYYY-MM-DD'),
      isEdit: false,
    },

    {
      firstName: 'Scarlet',
      middleName: 'Travis',
      lastName: 'gosh',
      address: 'abc street',
      role: userTypes.admin,
      phoneNumber: '+91849394839',
      email: 'abc@example.com',
      createdAt: moment().format('YYYY-MM-DD'),
      updatedAt: moment().format('YYYY-MM-DD'),
      isEdit: false,
    },
    {
      firstName: 'Cara',
      middleName: 'Duran',
      lastName: 'Dura',
      address: 'abc street',
      role: userTypes.superAdmin,
      phoneNumber: '+91849394839',
      email: 'abc@example.com',
      createdAt: moment().format('YYYY-MM-DD'),
      updatedAt: moment().format('YYYY-MM-DD'),
      isEdit: false,
    },

    {
      firstName: 'Mary',
      middleName: 'Fox',
      lastName: 'Foxen',
      address: 'abc street',
      role: userTypes.subscriber,
      phoneNumber: '+91849394839',
      email: 'abc@example.com',
      createdAt: moment().format('YYYY-MM-DD'),
      updatedAt: moment().format('YYYY-MM-DD'),
      isEdit: false,
    },

    {
      firstName: 'Irene',
      middleName: 'Bolt',
      lastName: 'Bolton',
      address: 'abc street',
      role: userTypes.admin,
      phoneNumber: '+91849394839',
      email: 'abc@example.com',
      createdAt: moment().format('YYYY-MM-DD'),
      updatedAt: moment().format('YYYY-MM-DD'),
      isEdit: false,
    },
  ];
  constructor() {}
  getUsers() {
    return this.users;
  }
}
