import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  num1 : number = 0;
  num2 : number = 0;
  sub : number = 0;

  constructor() { }

  ngOnInit() {
  }

  getSub() {
    this.sub = this.num1 - this.num2
  }

}
