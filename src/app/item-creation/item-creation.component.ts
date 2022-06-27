import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from '../app.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemsComponent } from '../items/items.component';
import { Location } from '@angular/common';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-item-creation',
  templateUrl: './item-creation.component.html',
  styleUrls: ['./item-creation.component.css']
})
export class ItemCreationComponent implements OnInit {

  constructor(private _location: Location,  private modalService: ModalService) { }

  ngOnInit(): void {
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
