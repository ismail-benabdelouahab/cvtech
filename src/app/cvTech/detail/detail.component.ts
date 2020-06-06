import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  personne: Personne;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.cvService.getPersonneById(params.id).subscribe(
          (personne) => {
            this.personne = personne;
          }, (error) => {
            console.log(error);
          }
        );
      }
    );
    /*this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.personne = this.cvService.getPersonneById(params.id);
        console.log(this.personne);
      }
    );*/
  }

  deletePersonne() {
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (Response) => {
        const link = ['cv'];
        this.router.navigate(link);
      }, (error) => {
        console.log(error);
      }
    );
  }
}
