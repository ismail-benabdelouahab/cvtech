import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';
import { HttpClient, HttpParams } from '@angular/common/http';
//import { link } from 'fs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];
  link = 'http://localhost:3000/api/personnes';
  constructor(
    private http: HttpClient
  ) {
    this.personnes = [
      new Personne(1, 'benabdelouahab', 'ismail', 36, 'ismail.png', 111111, 'Ingénieur'),
      new Personne(2, 'zidane', 'zinedine', 42, 'zizou.jpg', 2222222, 'foot player'),
      new Personne(2, 'test', 'test', 20, '', 333333, 'test')
    ];
  }

  getPersone(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.link);
  }

  getFakePersonnes() {
    return this.personnes;
  }

  getPersonneById(id: number): Observable<Personne> {
    return this.http.get<Personne>(this.link + `/${id}`);
    /*const personne = this.personnes.find(p => {
      return p.id == id;
    });
    return personne;*/
  }

  addPersonne(personne: Personne): Observable<any>{
    const token = localStorage.getItem('token');
    if (token) {
      const params = new HttpParams().set('access_token', token);
      return this.http.post(this.link, personne, {params});
    }
    return this.http.post(this.link, personne);
    //console.log(personne);
    //personne.id = this.personnes[this.personnes.length - 1].id + 1;
    //this.personnes.push(personne);
  }
  deletePersonne(id: number) {
    return this.http.delete(this.link + `/${id}`);
  }
}
