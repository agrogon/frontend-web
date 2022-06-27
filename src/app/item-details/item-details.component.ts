import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from '../item-update/item-update.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemsComponent } from '../items/items.component';
import { Location } from '@angular/common';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item;
  pokemonArrayDetails: any;
  pokemonDetails:string[] = [];
  bodyText;
  pokemonImage;

  constructor(private _Activatedroute:ActivatedRoute,
   private _router:Router,
   public aPIService: APIService, private _location: Location, private modalService: ModalService) { }

  ngOnInit(): void {
    this.item = history.state.data;
    //console.log(this.item);

    this.aPIService.getDetails(this.item).subscribe(data => {
      this.pokemonArrayDetails = data;
      for (let i = 0; i < 4; i++) {
        this.pokemonDetails.push(this.pokemonArrayDetails.moves[i].move.name);
        //console.log(this.pokemonArrayDetails.moves[i].move.name);
      }
      this.pokemonImage = this.pokemonArrayDetails.sprites.other.dream_world.front_default;
      //console.log(this.pokemonImage);
    });
  }

  backClicked() {
    this._location.back();
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
