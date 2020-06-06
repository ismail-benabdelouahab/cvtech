import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult: Personne[];
  chaine = '';
  constructor(
    private cvservice: CvService,
    private router: Router
  ) { }

  ngOnInit() {
    this.searchResult = [];
  }

  search() {
    let name = this.chaine;
    name = name.trim();
    if (name.length) {
      this.cvservice.findByName(name).subscribe(
       (response) => {
         console.log(response);
         this.searchResult = response;
       }, (error) => {
         console.log(error);
       }
     );
    } else {
      this.searchResult = [];
    }
  }

  selectPersonne(personne: Personne) {
    const link = ['cv', personne.id];
    this.router.navigate(link);
    this.searchResult = [];
    this.chaine = '';
  }
}
