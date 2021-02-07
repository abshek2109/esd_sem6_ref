import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.css']
})
export class DivComponent implements OnInit {

  divForm = new FormGroup({
    num1 : new FormControl(),
    num2 : new FormControl()
  });

  div: number = 0;
  result : boolean = false;

  loadData() {
    this.divForm.patchValue({
      num1 : 50,
      num2 : 10
    });
  }

  getDiv() {
    this.result = true;
    var x = this.divForm.value.num1
    var y = this.divForm.value.num2
    this.div = x / y;
  }

  constructor() { }

  ngOnInit() {  }

}
