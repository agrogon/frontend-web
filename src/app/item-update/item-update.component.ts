import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from './item-update.service';
import { ModalService } from '../modal/modal.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemsComponent } from '../items/items.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit {
  item;
  pokemonArrayDetails: any;
  pokemonDetails:string[] = [];
  bodyText;

  constructor(private _Activatedroute:ActivatedRoute,
   private _router:Router,
   public aPIService: APIService, private modalService: ModalService, private _location: Location) { }

  ngOnInit(): void {
    this.item = history.state.data;
    console.log(this.item);

    this.aPIService.getDetails(this.item).subscribe(data => {
      this.pokemonArrayDetails = data;
      //console.log(this.pokemonArrayDetails.results[0].name);
      for (let i = 0; i < 4; i++) {
        this.pokemonDetails.push(this.pokemonArrayDetails.moves[i].move.name);
        console.log(this.pokemonArrayDetails.moves[i].move.name);
      }

    });
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  backClicked() {
    this._location.back();
  }

  
}
