import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CvService } from '../cv.service';
import { Personne } from 'src/app/Model/Personne';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCVComponent implements OnInit {
  personne: Personne;
  errorMessage: string = '';
  constructor(
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addPersonne(formulaire: NgForm) {
    this.cvService.addPersonne(formulaire.value).subscribe(
      (response) => {
        const link = ['cv'];
        this.router.navigate(link);
      }, (error) => {
        this.errorMessage = 'Problème de connxion dans votre serveur, Prièr de consulter votre administrateur';
        console.log(error);
      }
    );

    //const link = ['cv'];
   //// this.cvService.addPersonne(formulaire.value);
    //this.router.navigate(link);
  }
}
