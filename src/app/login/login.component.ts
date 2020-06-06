import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(credentials){
    console.log(credentials);
    this.authService.login(credentials).subscribe(
      (response) => {
        const token = response['id'];
        console.log('token', token);
        const link = ['cv'];
        localStorage.setItem('token', token);
        this.router.navigate(link);
      }, (error) => {
        console.log(error);
      }
    );
  }
}
