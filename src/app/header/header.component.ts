import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  visibility = false;
  constructor(
    private authService: AuthentificationService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  isloged() {
    return this.authService.isLoged();
  }

  show() {
    this.visibility = !this.visibility;
  }
}
