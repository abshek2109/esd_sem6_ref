import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    let url = "https://jsonplaceholder.typicode.com/users";
    return this.http.get(url);
  }

}

/**
 * create employee component and service
 * in employee service create getEmployees() function
 * call https://jsonplaceholder.typicode.com/users service
 * and console.table data in browser
 */
