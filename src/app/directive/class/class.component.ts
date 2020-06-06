import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  teams = [
    'est',
    'om',
    'barca',
    'milan'
  ];
  est = false;
  barca = false;
  milan = false;
  last = false;

  show = true;
  constructor() { }

  ngOnInit() {
  }

  changeToEst() {
    this.est = true;
    this.barca = false;
    this.milan = false;
  }

  changeToBarca() {
    this.est = false;
    this.barca = true;
    this.milan = false;
  }

  changeToMilan() {
    this.est = false;
    this.barca = false;
    this.milan = true;
  }
}
