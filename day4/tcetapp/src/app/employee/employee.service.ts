import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getEmployees() {
    let url = "http://localhost:8080/employee";
    return this.httpClient.get(url);
  }

  getEmployee(id) {
    let url = `http://localhost:8080/employee/${id}`;
    return this.httpClient.get(url);
  }

  postEmployee(form_data: any) {
    let url = "http://localhost:8080/employee";
    return this.httpClient.post(url, form_data);
  }

  putEmployee(form_data) {
    let url = "http://localhost:8080/employee";
    return this.httpClient.put(url, form_data);
  }

  deleteEmployee(id: any) {
    let url = `http://localhost:8080/employee/?id=${id}`;
    return this.httpClient.delete(url);
  }

  deleteManyEmployee(id: any) {
    let url = `http://localhost:8080/employee/deletemany`;
    return this.httpClient.post(url, {ids : [1,2,3,4,5]});
  }


}
