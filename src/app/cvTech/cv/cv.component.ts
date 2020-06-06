import { Component, OnInit, Input } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { PremierService } from 'src/app/service/premier.service';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: Personne[];
  selectedPersonne: Personne;

  constructor(private premierServier: PremierService, private cvService: CvService) { }

  ngOnInit() {
    this.cvService.getPersone().subscribe(
      (personne) => {
        this.personnes = personne;
      }, (error) => {
        alert('Problème d\'accès à l\'api, les données affichées sont fake');
        console.log(error);
        this.personnes = this.cvService.getFakePersonnes();
      }
    );

    //this.personnes = this.cvService.getPersone();
    //this.premierServier.addData('data form cvComponent');
    //this.premierServier.logger(this.personnes);
  }

  selectPersonne(personne) {
    this.selectedPersonne = personne;
  }

}
