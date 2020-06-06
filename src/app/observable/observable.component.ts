import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  monObservable: Observable<string>;
  mesImage = [
    '404.jpg',
    'cv.jpg',
    'ismail.png',
    'zizou.jpg'
  ];
  curentImage: string;
  constructor() { }

  ngOnInit() {
    this.monObservable = new Observable(
      (observer) => {
        let i = this.mesImage.length - 1;
        setInterval(
          () => {
            observer.next(this.mesImage[i]);
            if (i > 0) {
              i--;
            } else {
              i = this.mesImage.length - 1;
            }
          }
        , 1500);
      }
    );

    this.monObservable.subscribe(
      (result) => {
        console.log(result);
        this.curentImage = result;
      }
    );
  }

}
