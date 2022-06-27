import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from './app.service';
import { ModalService } from './modal/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:' <a routerLink="page">Go to page</a>'
})

export class AppComponent implements OnInit {
  bodyText;

  pokemonArray: any;
  pokemonName:string[] = [];

  constructor(private modalService: ModalService, public aPIService: APIService, private router: Router) {}

  ngOnInit() {
    this.aPIService.getItems().subscribe(data => {
      this.pokemonArray = data;
      for (let i = 0; i < 20; i++) {
        this.pokemonName.push(this.pokemonArray.results[i].name);
      }
    });
  }

}