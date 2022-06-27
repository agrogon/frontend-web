import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from '../app.service';
import { ModalService } from '../modal/modal.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  template: "<h1>Page Works!</h1>"
})
export class ItemsComponent implements OnInit {
  bodyText;

  pokemonArray: any;
  pokemonName:string[] = [];

  constructor( private modalService: ModalService, public aPIService: APIService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
      this.aPIService.getItems().subscribe(data => {
        this.pokemonArray = data;
      for (let i = 0; i < Object.keys(this.pokemonArray.results).length; i++) {
        this.pokemonName.push(this.pokemonArray.results[i].name);
      }
      
    });
  }

}
