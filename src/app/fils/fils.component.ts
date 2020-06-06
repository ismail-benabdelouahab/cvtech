import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() filsProperty;
  @Output() sendRequestToData = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    console.log(this.filsProperty);
  }

  sendEvent() {
    this.sendRequestToData.emit(
      ` Pleas can i have some money :)`
    );
  }
}
