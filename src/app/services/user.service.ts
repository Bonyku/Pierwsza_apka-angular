import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[];
  data!: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'chris',
        lastName: 'bak',
        email: 'c@gmail.com',
        isActive: true,
        registered: new Date('01/01/2021 08:00:00'),
        hide: true,
      },
      {
        firstName: 'patryk',
        lastName: 'bankowski',
        email: 'p@gmail.com',

        isActive: false,
        registered: new Date('12/02/2020 08:55:00'),
        hide: true,
      },
      {
        firstName: 'norbert',
        lastName: 'bankowski',
        email: 'n@gmail.com',

        isActive: true,
        registered: new Date('11/01/2020 08:00:1'),
        hide: true,
      },
    ];
  }
  getData() {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next(4);
      }, 4000);
      setTimeout(() => {
        observer.next(5);
      }, 5000);
    });
    return this.data;
  }

  getUsers(): Observable<User[]> {
    console.log('Fetching users from service...');
    return of(this.users);
  }
  addUser(user: User) {
    this.users.unshift(user);
  }
}
