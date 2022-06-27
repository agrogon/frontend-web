import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from './modal';
import { routing } from './app.routing';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemCreationComponent } from './item-creation/item-creation.component';
import { ItemUpdateComponent } from './item-update/item-update.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

@NgModule({
  declarations: [
  AppComponent,
  ItemsComponent,
  ItemCreationComponent,
  ItemUpdateComponent,
  ItemDetailsComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpClientModule,
  ModalModule,
  routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }