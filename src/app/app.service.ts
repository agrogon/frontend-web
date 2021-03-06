import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class APIService {
  constructor(private http: HttpClient) {}

	url: string = 'https://pokeapi.co/api/v2/pokemon';

  getItems(): Observable<any> {
    return this.http.get(this.url);
  }

}