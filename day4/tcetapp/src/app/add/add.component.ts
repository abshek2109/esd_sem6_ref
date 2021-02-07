import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  num : number = 0;
  sqr : number = 0;

  num1 : number = 0;
  num2 : number = 0;
  addition : number = 0;

  constructor() { }

  ngOnInit() {
  }

  getSqr() {
    let x = this.num;
    console.log(this.num);
    this.sqr = x * x;
  }

  getAdd() {
    this.addition = Number(this.num1) + Number(this.num2);
  }

}
