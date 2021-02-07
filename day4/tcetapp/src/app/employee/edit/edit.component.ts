import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  empForm : FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    age: new FormControl(),
    city: new FormControl(),
    salary: new FormControl(),
  });


  constructor(private empService: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params.id);

     this.empService.getEmployee(this.route.snapshot.params.id).subscribe((response: any) => {
      this.empForm.patchValue({
        id: response._id,
        name: response.name,
        age: response.age,
        city: response.city,
        salary: response.salary,
      });
    });
  }


  updateEmp() {
    this.empService.putEmployee(this.empForm.value).subscribe((response) => {
      console.log(response);
      window.location.href= "employee";
    });
  }

}
