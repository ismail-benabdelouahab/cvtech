import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent implements OnInit {
  @Input() personnes: Personne[];
  @Output() selectedPersonne = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectPersonne(selectedPersonne) {
   // console.log('ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt:');
   // console.log(selectedPersonne);
   this.selectedPersonne.emit(
    selectedPersonne
    );
  }

}
