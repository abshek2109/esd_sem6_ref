import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empForm : FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    city: new FormControl(),
    salary: new FormControl(),
  });

  empData : any;
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.empService.getEmployees().subscribe((response) => {
      this.empData = response;
    });
  }

  addEmp() {
    this.empService.postEmployee(this.empForm.value).subscribe((response) => {
      console.log(response);
      window.location.reload();
    });
  }

  deleteEmp(id) {
    this.empService.deleteEmployee(id).subscribe((response) => {
      console.log(response);
      window.location.reload();
    });
  }

}
