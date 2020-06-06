import { Component, OnInit } from '@angular/core';
import { PremierService } from '../service/premier.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers : [PremierService]
})
export class ColorComponent implements OnInit {
  color = 'red';

  constructor(
    private premierService: PremierService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.color = params.default;
      }
    );
  }

  processReq(message: any) {
    alert(message);
  }

  loggerMesData() {
    this.premierService.logger('test');
  }
  /*changeColor(input) {
    console.log(input.value);
    this.color = input.value;
    input.value = '';
  }*/

  goToCv() {
    const link = ['cv'];
    this.router.navigate(link);
  }
}
