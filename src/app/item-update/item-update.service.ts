import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class APIService {
  constructor(private http: HttpClient) {}
	url;

  getDetails(id): Observable<any> {
  	this.url = 'https://pokeapi.co/api/v2/pokemon/'+ id;
    return this.http.get(this.url);
  }

}