import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemCreationComponent } from './item-creation/item-creation.component';
import { ItemUpdateComponent } from './item-update/item-update.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

const rutas: Routes = [
{ path: '', component: ItemsComponent },
{ path: 'item-creation', component: ItemCreationComponent },
{ path: 'item-update', component: ItemUpdateComponent },
{ path: 'item-details', component: ItemDetailsComponent }

];

export const routing = RouterModule.forRoot(rutas);

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
